<div style="width: 100%;" class="clearfix">
    <h2 ng-init = "photo = <?php 
        if ($this->data['Order']['order_photo'] != NULL ) {
            echo $this->data['Order']['order_photo']; 
        } else {
            echo 1;
        }
        
    ?>"><?php echo __('Zdjęcia'); ?></h2>
    <?php $photoPrice = $this->Price->permanentPriceElement('PHOTOPRICE'); ?>
    <?php echo $this->Form->input('order_photo', array(
        'label' => __('Wybierz źródło zdjęcia'),
        'legend' => __('Wybierz źródło zdjęcia'),
        'type' => 'radio',
        'ng-model' => 'photo',
        'ng-change' => 'selectPhoto(photo); calculatePrice()',
        'options' => array(
            1 => 'Chcę dodać teraz',
            2 => 'Sam uzupełnię po napisaniu tekstu',
            3 => 'Zamawiam zakup zdjęcia przez ContentPRO ('.$photoPrice.' zł)'
        )
    )); ?>
    <div ng-show = "photo == 1">
        <?php echo $this->Form->input('files', array(
            'label' => __('Wgraj swoje zdjęcia'),
            'type' => 'x-file', 
            'buttonLabel' => __('Przeciągnij i upuść zdjęcia na tym obszarze'),
            'maxFiles' => 99
        )); ?>
    </div>
    
    <?php if ($orderImages != null) {
        
        foreach ($orderImages as $key => $value) {
            $imagePath = $uploadPath.'tn_'.$value['Asset']['name'];
            ?><img src="<?php echo $imagePath; ?>" /><?php 
        }
    
    } ?>
</div>