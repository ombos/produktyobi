<?php $photoPrice = $this->Price->permanentPriceElement('PHOTOPRICE'); ?> 
 <div>
    <label><h3><?php if ($this->data['Order']['draft'] == 1) {
        ?><i class="fa fa-pencil-square" title="<?php echo __('Szkic'); ?>"></i> Szkic - <?php
    } ?> <?php echo __('Zamówienie').': ';  echo $this->data['Order']['order_number']; ?></h3></label>
    <div class="clearfix" style="display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex; justify-content: space-around;">	
        <div class="orderViewElement">
            <p><strong><?php echo __('Rodzaj'); ?>:</strong> <?php echo $this->Display->json_path($this->data['Order']['json_path']); ?></p>
            <?php if ($this->Authorize->isAllowed(AuthComponent::user('id'), array(1,2,3,9))) { ?>
			<p><strong><?php echo __('Klient'); ?>:</strong> <?php echo $this->data['User']['name']; ?></p>
			<?php } ?>
			<?php if ($this->Authorize->isAllowed(AuthComponent::user('id'), array(1,2,3,6,9)) && !empty($this->data['Order']['total_price'])) { ?>
            <p><strong><?php echo __('Cena'); ?>:</strong> <?php echo $this->data['Order']['total_price']; ?>zł</p>
			<?php } ?>
			<?php if ($this->Authorize->isAllowed(AuthComponent::user('id'), array(1,2,3,9))) { ?>
            <p><strong><?php echo __('Projekt'); ?>:</strong> <?php echo $this->data['Project']['name']; ?></p>
			<?php } ?>
			<?php if ($this->Authorize->isAllowed(AuthComponent::user('id'), array(1,2,3,9))) { ?>
            <p><strong><?php echo __('Kategoria'); ?>:</strong> <?php echo $this->data['SystemTopicType']['name']; ?></p>
			<?php } ?>
        </div>
            
        <div class="orderViewElement">
            <p><strong><?php echo __('Termin realizacji'); ?>:</strong> <?php echo $this->data['Order']['deadline']; ?></p>
			<?php if ($this->Authorize->isAllowed(AuthComponent::user('id'), array(1,2,3,6,9)) && $this->data['Order']['order_variant_id'] == 2) { ?>
            <p><strong><?php echo __('Keywording'); ?>:</strong> <?php if ($this->data['Order']['keywording_required']) { echo "TAK"; } else { echo "NIE"; } ?></p>
            <p><strong><?php echo __('Korekta'); ?>:</strong> <?php if ($this->data['Order']['correction_required']) { echo "TAK"; } else { echo "NIE"; } ?></p>
            <p><strong><?php echo __('Artykuł ekspercki'); ?>:</strong> <?php if ($this->data['Order']['keywording_required']) { echo "TAK"; } else { echo "NIE"; } ?></p>
            <p><strong><?php if (!empty($this->data['Order']['order_articles_amount'])) { echo __('Liczba zamówionych artykułów'); ?>:</strong> <?php echo $this->data['Order']['order_articles_amount']; } ?></p>
			<?php } ?>
        </div>
        
		<?php if ($this->Authorize->isAllowed(AuthComponent::user('id'), array(1,2,3,9))) { ?>
        <div class="orderViewElement">
			<?php if ($this->Authorize->isAllowed(AuthComponent::user('id'), array(1,2,3,9)) && $this->data['Order']['order_variant_id'] == 2) { ?>
            <p><strong><?php echo __('Wybór z cennika'); ?>:</strong> <?php echo $this->data['SystemPricelistElement']['element_name']; ?> - <?php echo $this->data['SystemPricelistElement']['element_price']; ?> zł brutto</p>
			<?php } ?>
		
            <p><strong><?php echo __('Preferowana forma kontaktu'); ?>:</strong>
                <?php 
                    if ($this->data['Order']['order_preffered_contact'] == 1) echo "E-mail - dowolna pora";
                    if ($this->data['Order']['order_preffered_contact'] == 2) echo "Telefon - dowolna pora";
                ?>
            </p>
            <p><strong><?php echo __('Kontakt e-mail'); ?>:</strong> <?php echo $this->data['Order']['order_contact_email']; ?></p>
            <p><strong><?php echo __('Kontakt telefon'); ?>:</strong> <?php echo $this->data['Order']['order_contact_mobile']; ?></p>
			
            <p><strong><?php echo __('Akcja dotycząca zdjęcia'); ?>:</strong>
                <?php 
                    if ($this->data['Order']['order_photo'] == 1) echo "Chcę dodać teraz";
                    if ($this->data['Order']['order_photo'] == 2) echo "Sam uzupełnię po napisaniu tekstu";
                    if ($this->data['Order']['order_photo'] == 3) echo "Zamawiam zakup zdjęcia przez ContentPRO (".$photoPrice." zł)";
                ?>
            </p>
        </div>
		<?php } ?>
    </div>

    <div class="orderViewElementFull">
        <p><strong><?php echo __('Uwagi'); ?>:</strong> <?php echo $this->data['Order']['order_notices']; ?></p>
    </div>

    <?php /* if ($orderImages != null && !empty($orderImages)) { ?>
    <div class="orderViewElementFull">
    <p><strong><?php echo __('Dodane zdjęcia:'); ?></strong></p>
    <?php
        foreach ($orderImages as $key => $value) {
            $imagePath = $uploadPath.'tn_'.$value['Asset']['name'];
            ?><img src="<?php echo $imagePath; ?>" /><?php 
        }
    ?>
    </div>
    <?php } */ ?>
</div>