<?php echo $this->Form->input('id'); ?>
<?php echo $this->Form->input('json_path', array(
        'label' => false,
        'type' => 'hidden',
        'class' => 'json_path'
    )); ?>
<?php echo $this->Form->input('system_order_element_id', array(
        'label' => false,
        'type' => 'hidden',
        'class' => 'system_order_element_id'
    )); ?>
<?php echo $this->Form->input('total_price', array(
        'label' => false,
        'type' => 'hidden',
        'class' => 'total_price'
    )); ?>
<?php echo $this->Form->input('publisher_order', array(
        'label' => false,
        'type' => 'hidden',
        'class' => 'publisher_order',
        'value' => 0
    )); ?>
<?php echo $this->Form->input('draft', array(
        'type' => 'hidden',
        'class' => 'draft'
    )); ?>