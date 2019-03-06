<div class="pages dashboard container">
    <div class="dashboard-info">
        <?php if (in_array(1, $roles) || in_array(2, $roles)) : ?>
            <?php echo $this->element('../Pages/dashboard_admin'); ?>
		<?php elseif (in_array(3, $roles)) : ?>
			<?php echo $this->element('../Pages/dashboard_manager'); ?>
		<?php elseif (in_array(8, $roles)) : ?>
			<?php echo $this->element('../Pages/dashboard_projektant'); ?>
		<?php elseif (in_array(9, $roles)) : ?>
			<?php echo $this->element('../Pages/dashboard_producent'); ?>
		<?php elseif (in_array(10, $roles)) : ?>
			<?php echo $this->element('../Pages/dashboard_obserwator'); ?>
        <?php endif; ?>
    </div>
</div>