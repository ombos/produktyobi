<?php
App::uses('AppController', 'Controller');

class PagesController extends AppController {
	
	public $helpers = array(
		'Page'
	);
    public $uses = array(
        'Project',
        'Payment',
        'User',
		'ObiProduct'
    );
	public $components = array(
        'Highcharts.Highcharts',
    );
    
	public function beforeFilter() {
		
		parent::beforeFilter();
		$this->Security->addUnlockedActions(
			'get_money_chart',
            'get_users_chart'
		);
		
	}
	
	public function public_home() {
		
		$this->layout = 'public';
	}
	
	public function contact() {}
	
	public function public_grant() {}
	
	public function public_rules() {}
	
	public function public_privacy_policy() {}
	
	public function public_help() {}
	
	public function public_faq() {}
	
	public function public_language($language) {
	
		$this->autoRender = false;
		
		if ($language == 'eng' || $language == 'pol') {
			$this->Session->write('Config.language', $language);
		}
	
	}
	
	public function public_access_terminated() {}
	
	public function public_unauthorized() {}
	
	public function dashboard() {
		
		$products = array();
		
		$products = $this->ObiProduct->find('list', array(
			'recursive' => -1,
			'conditions' => array(
				'ObiProduct.user_id' => $this->Auth->user('id')
			)
		));
		
        $roles = $this->UserRoleAssociation->find('list', array(
            'recursive' => -1,
            'conditions' => array(
                'user_id' => $this->Auth->user('id'),
            ),
            'fields' => array(
                'user_role_id',
            )
        ));
        
        $this->set(compact('roles', 'products'));
        
	}
    
    public function not_ready() {}
    
    public function get_money_chart() {
        
        $this->layout = false;
        $this->_buildMoneyChart($this->request->data);
        $renderedView = $this->render();
        
        $this->rdsResponse->data = array(
            'html' => $renderedView->body()
        );
        
    }
    
    public function get_users_chart() {
        
        $this->layout = false;
        $this->_buildUsersChart($this->request->data);
        $renderedView = $this->render();
        
        $this->rdsResponse->data = array(
            'html' => $renderedView->body()
        );
        
    }
    
    protected function _buildMoneyChart($params = array()) {
        
        $periods = $this->_getMoneyChartData($params);
        $chartKeys = array();
        $chartData = array();
        
        foreach ($periods as $period) {
            $chartKeys[] = date('m-d', strtotime($period['from'])).'<br>'.date('m-d', strtotime($period['to']));
            $chartData[] = $period['balance'];
        }
        
        $chartName = 'Money Chart';
        $chartId = 'chart_'.substr(md5(serialize($params)), 0, 10);
        $mychart = $this->Highcharts->create($chartName, 'line');
        
        $this->Highcharts->setChartParams($chartName, array(
            'renderTo' => 'linewrapper_'.$chartId,
            'chartWidth' => isset($params['width']) ? $params['width'] : 560,
            'chartHeight' => 400,
            'chartMarginTop' => 15,
            'chartMarginLeft' => 75,
            'chartMarginRight' => 15,
            'chartMarginBottom' => 90,
            'chartSpacingRight' => 10,
            'chartSpacingBottom' => 15,
            'chartSpacingLeft' => 0,
            'chartAlignTicks' => FALSE,
            'chartBackgroundColorLinearGradient' => array(0, 0, 0, 300),
            'chartBackgroundColorStops' => array(array(0, 'rgb(217, 217, 217)'), array(1, 'rgb(255, 255, 255)')),
            'titleAlign' => 'left',
            'titleFloating' => TRUE,
            'titleStyleFont' => '18px Metrophobic, Arial, sans-serif',
            'titleStyleColor' => '#0099ff',
            'titleX' => 20,
            'titleY' => 20,
            'legendEnabled' => TRUE,
            'legendLayout' => 'horizontal',
            'legendAlign' => 'center',
            'legendVerticalAlign ' => 'bottom',
            'legendItemStyle' => array('color' => '#222'),
            'legendBackgroundColorLinearGradient' => array(0, 0, 0, 25),
            'legendBackgroundColorStops' => array(array(0, 'rgb(217, 217, 217)'), array(1, 'rgb(255, 255, 255)')),
            'tooltipEnabled' => FALSE,
            'xAxisLabelsEnabled' => TRUE,
            'xAxisLabelsAlign' => 'right',
            'xAxisLabelsStep' => 1,
            'xAxislabelsX' => 5,
            'xAxisLabelsY' => 20,
            'xAxisCategories' => $chartKeys,
            'yAxisTitleText' => 'Bilans w PLN',
            'enableAutoStep' => FALSE
        ));
        
        $seriesTitle = isset($params['chart_name']) ? $params['chart_name'] : 'kwota';

        $series1 = $this->Highcharts->addChartSeries();
        $series1->addName($seriesTitle)->addData($chartData);
        $mychart->addSeries($series1);
        
        $this->set(compact('chartName', 'chartId'));
        
    }
    
    protected function _getMoneyChartData($params = array()) {
        
        $periods = array();
        $lastMonday = strtotime('last monday');
        
        for ($i = 7; $i >= 0; $i--) {
            $mondayStart = strtotime('-'.$i.' week', $lastMonday);
            $sundayEnd = strtotime('-'.($i - 1).' week -1 second', $lastMonday);
            $periods[] = array(
                'from' => date('Y-m-d H:i:s', $mondayStart),
                'to' => date('Y-m-d H:i:s', $sundayEnd),
                'balance' => 0,
            );
        }
        
        $userIds = array();
        
        if (isset($params['user_role_id'])) {
            $usersWithThatRole = $this->User->getAllUsersWithRoleId('all', $params['user_role_id']);
            foreach ($usersWithThatRole as $userWithThatRole) {
                $userIds[] = $userWithThatRole['User']['id'];
            }
        }
        
        foreach ($periods as $key => $period) {
            $conditions = array(
                'Payment.created >=' => $period['from'],
                'Payment.created <=' => $period['to'],
            );
            if (isset($params['user_role_id'])) {
                $conditions['Payment.user_id'] = $userIds;
            }
            $payments = $this->Payment->find('all', array(
                'conditions' => $conditions,
            ));
            foreach ($payments as $payment) {
                $periods[$key]['balance'] -= $payment['Payment']['amount'];
            }
        }
        
        return $periods;
        
    }
    
    protected function _buildUsersChart($params = array()) {
        
        $periods = $this->_getUsersChartData($params);
        $chartKeys = array();
        $chartData = array();
        
        foreach ($periods as $period) {
            $chartKeys[] = date('m-d', strtotime($period['from'])).'<br>'.date('m-d', strtotime($period['to']));
            $chartData[] = $period['users_count'];
        }

        $chartName = 'Users Chart';
        $chartId = 'chart_'.substr(md5(serialize($params)), 0, 10);

        $mychart = $this->Highcharts->create($chartName, 'bar');

        $this->Highcharts->setChartParams($chartName, array(
            'renderTo' => 'barwrapper_'.$chartId,
            'chartWidth' => isset($params['width']) ? $params['width'] : 560,
            'chartHeight' => 600,
            'chartMarginTop' => 25,
            'chartMarginLeft' => 60,
            'chartMarginRight' => 30,
            'chartMarginBottom' => 110,
            'chartSpacingRight' => 10,
            'chartSpacingBottom' => 15,
            'chartSpacingLeft' => 0,
            'chartAlignTicks' => FALSE,
            'chartBackgroundColorLinearGradient' => array(0, 0, 0, 300),
            'chartBackgroundColorStops' => array(array(0, 'rgb(217, 217, 217)'), array(1, 'rgb(255, 255, 255)')),
            'titleAlign' => 'left',
            'titleFloating' => TRUE,
            'titleStyleFont' => '18px Metrophobic, Arial, sans-serif',
            'titleStyleColor' => '#0099ff',
            'titleX' => 20,
            'titleY' => 20,
            'legendEnabled' => TRUE,
            'legendLayout' => 'horizontal',
            'legendAlign' => 'center',
            'legendVerticalAlign ' => 'bottom',
            'legendItemStyle' => array('color' => '#222'),
            'legendBackgroundColorLinearGradient' => array(0, 0, 0, 25),
            'legendBackgroundColorStops' => array(array(0, 'rgb(217, 217, 217)'), array(1, 'rgb(255, 255, 255)')),
            'tooltipEnabled' => FALSE,
            'xAxisLabelsEnabled' => TRUE,
            'xAxisLabelsAlign' => 'right',
            'xAxisLabelsStep' => 1,
            'xAxislabelsX' => -10,
            'xAxisLabelsY' => 20,
            'xAxisCategories' => $chartKeys,
            'yAxisTitleText' => 'Rejestracje',
            'exportingEnabled' => FALSE,
            'enableAutoStep' => FALSE
        ));
        
        $seriesTitle = isset($params['chart_name']) ? $params['chart_name'] : 'użytkownicy';

        $series = $this->Highcharts->addChartSeries();
        $series->addName($seriesTitle)->addData($chartData);
        $mychart->addSeries($series);
        
        $this->set(compact('chartName', 'chartId'));
        
    }
	
    protected function _getUsersChartData($params = array()) {
        
        $periods = array();
        $lastMonday = strtotime('last monday');
        
        for ($i = 7; $i >= 0; $i--) {
            $mondayStart = strtotime('-'.$i.' week', $lastMonday);
            $sundayEnd = strtotime('-'.($i - 1).' week -1 second', $lastMonday);
            $periods[] = array(
                'from' => date('Y-m-d H:i:s', $mondayStart),
                'to' => date('Y-m-d H:i:s', $sundayEnd),
                'users_count' => 0,
            );
        }
        
        foreach ($periods as $key => $period) {
            $conditions = array(
                'User.created >=' => $period['from'],
                'User.created <=' => $period['to'],
            );
            $users = $this->User->find('all', array(
                'conditions' => $conditions,
            ));
            $periods[$key]['users_count'] += count($users);
        }
        
        return $periods;
        
    }
    
}
