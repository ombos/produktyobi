<h1><?php echo __('Drogi administratorze!'); ?></h1>
<p><?php echo __('Został utworzony nowy projekt!'); ?></p>
<p>
    Projekt:<br/>
    <b><?php echo $project['Project']['name']; ?></b><br/>
    <?php echo $project['Project']['description']; ?>
</p>
<p>
    Klient:<br/>
    <b><?php echo $client['User']['name']; ?></b> - <?php echo $client['User']['email']; ?>
</p>
<br/>
<p>Pozdrawiamy, <br/> Zespół Content Pro</p>