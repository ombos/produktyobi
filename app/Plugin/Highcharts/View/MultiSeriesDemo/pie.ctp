<?php
/**
 *  CakePHP Highcharts Plugin
 * 
 * 	Copyright (C) 2014 Kurn La Montagne / destinydriven
 * 	<https://github.com/destinydriven> 
 * 
 * 	Multi-licensed under:
 * 		MPL <http://www.mozilla.org/MPL/MPL-1.1.html>
 * 		LGPL <http://www.gnu.org/licenses/lgpl.html>
 * 		GPL <http://www.gnu.org/licenses/gpl.html>
 * 		Apache License, Version 2.0 <http://www.apache.org/licenses/LICENSE-2.0.html>
 */
?>
<div class="chart">
        <h4>Pie Chart</h4>

        <div id="piewrapper" style="display: block; float: left; width:90%; margin-bottom: 20px;"></div>
        <div class="clear"></div>	
        <?php echo $this->Highcharts->render($chartName); ?>

</div>