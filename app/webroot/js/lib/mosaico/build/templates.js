var templateSystem = require('../src/js/bindings/choose-template.js');
document.addEventListener('DOMContentLoaded', function(event) {
templateSystem.addTemplate("array", "<!-- ko foreach: $data --><!-- ko block: $data --><!-- /ko --><!-- /ko -->");
templateSystem.addTemplate("block-show", "<!-- ko block: $data, scrollIntoView: $root.selectedBlock() === $data --><!-- /ko -->");
templateSystem.addTemplate("block-wysiwyg", "<div class=\x22editable block\x22 data-drop-content=\x22Drop here\x22 data-bind=\x22attr: { 'data-drop-content': $root.t('Drop here') }, click: function(obj, evt) { $root.selectBlock(obj); return true }, clickBubble: false, css: { selected: $root.selectedBlock() === $data }, scrollIntoView: $root.selectedBlock() === $data\x22>  <div class=\x22mo-blockselectionhelper\x22></div>  <div class=\x22tools\x22 data-bind=\x22tooltips: {}\x22>    <!-- ko if: typeof $index != 'undefined' -->    <div title=\x22Drag this handle to move the block\x22 data-bind=\x22attr: { title: $root.t('Drag this handle to move the block') }\x22 class=\x22tool handle\x22><i class=\x22fa fa-fw fa-sort\x22></i></div>    <!-- ko if: $index() > 0 -->    <div title=\x22Move this block upside\x22 data-bind=\x22attr: { title: $root.t('Move this block upside') }\x22 class=\x22tool moveup\x22><i class=\x22fa fa-fw fa-sort-asc\x22 data-bind='click: $root.moveBlock.bind($element, $index, $parent, true)'></i></div>    <!-- /ko -->    <!-- ko if: $index() < $parent.blocks().length -1 -->    <div title=\x22Move this block downside\x22 data-bind=\x22attr: { title: $root.t('Move this block downside') }\x22 class=\x22tool movedown\x22><i class=\x22fa fa-fw fa-sort-desc\x22 data-bind='click: $root.moveBlock.bind($element, $index, $parent, false)'></i></div>    <!-- /ko -->    <div title=\x22Delete block\x22 class=\x22tool delete\x22 data-bind=\x22attr: { title: $root.t('Delete block') }, click: $root.removeBlock.bind($element, $rawData, $parent)\x22><i class=\x22fa fa-fw fa-trash-o\x22></i></div>    <div title=\x22Duplicate block\x22 class=\x22tool clone\x22 data-bind=\x22attr: { title: $root.t('Duplicate block') }, click: $root.duplicateBlock.bind($element, $index, $parent)\x22><i class=\x22fa fa-fw fa-files-o\x22></i></div>    <!-- /ko -->    <!-- ko if: typeof $data._nextVariant != 'undefined' --><div title=\x22Switch block variant\x22 class=\x22tool variant\x22 data-bind=\x22attr: { title: $root.t('Switch block variant') }, click: $data._nextVariant\x22><i class=\x22fa fa-fw fa-magic\x22></i></div><!-- /ko -->  </div>  <!-- ko block: $data --><!-- /ko --></div>");
templateSystem.addTemplate("blocks-show", "<!-- ko template: { name: 'block-show', foreach: blocks } --><!-- /ko -->");
templateSystem.addTemplate("blocks-wysiwyg", "<div class=\x22sortable-blocks-edit\x22 data-drop-content=\x22Drop here\x22 data-empty-content=\x22Drop here blocks from the Blocks tab\x22 data-bind=\x22attr: { 'data-drop-content': $root.t('Drop here'), 'data-empty-content': $root.t('Drop here blocks from the &quot;Blocks&quot; tab') }, css: { 'empty': ko.utils.unwrapObservable(blocks).length == 0 }, extsortable: { connectClass: 'sortable-blocks-edit', template: 'block-wysiwyg', data: blocks, dragging: $root.dragging, beforeMove: $root.startMultiple, afterMove: $root.stopMultiple, options: { handle: '.handle', placeholder: $root.placeholderHelper } }\x22></div>");
templateSystem.addTemplate("customstyle", "<div class=\x22customStyleHelp\x22 data-bind=\x22html: $root.t('Customized block.<ul><li>In this status changes to properties will be specific to the current block (instead of being global to all blocks in the same section)</li><li>A <span class=&quot;customStyled&quot;><span>&quot;small cube&quot; </span></span> icon beside the property will mark the customization. By clicking this icon the property value will be reverted to the value defined for the section.</li></ul>')\x22>Customized block.<ul><li>In this status changes to properties will be specific to the current block (instead of being global to all blocks in the same section)</li><li>A <span class=\x22customStyled\x22><span>\x22small cube\x22 </span></span> icon beside the property will mark the customization. By clicking this icon the property value will be reverted to the value defined for the section.</li></ul></div>");
templateSystem.addTemplate("empty", "");
templateSystem.addTemplate("error", "[<div style=\x22background-color: #fff0f0\x22 data-bind=\x22text: ko.toJS($data)\x22></div>]");
templateSystem.addTemplate("gallery-images", "<div data-bind=\x22foreach: items.currentPageData\x22>  <div class=\x22draggable-item\x22 data-bind=\x22if: typeof thumbnailUrl != 'undefined'\x22>    <div class=\x22draggable image\x22 data-bind=\x22click: $root.addImage, extdraggable: { data: $data, dropContainer: '#main-wysiwyg-area', dragging: $root.draggingImage, 'options': { 'appendTo': '#page' } }, style: { backgroundImage: 'url(\\'' + thumbnailUrl + '\\')' }\x22>      <img title=\x22Trascina questa immagine sulla posizione in cui vuoi inserirla\x22 style=\x22display: block;\x22 data-bind=\x22tooltips: {}, attr: { src: thumbnailUrl }\x22/>    </div>  </div></div><!-- ko if: items.pageCount() > 1 --><div class=\x22galleryPager\x22 data-bind=\x22buttonset: {}\x22>  <a href=\x22#\x22 data-bind=\x22click: items.moveFirst, button: { disabled: items.currentPage() == 1, icons: { primary: 'fa fa-fast-backward' }, text: false }\x22>First</a>  <a href=\x22#\x22 data-bind=\x22click: items.movePrevious, button: { disabled: items.currentPage() == 1, icons: { primary: 'fa fa-backward' }, text: false }\x22>Previous</a>  <span data-bind=\x22button: { disabled: true, text: true, label: ' '+items.currentPage()+' di '+items.pageCount()+' ' }\x22> X di Y </span>  <a href=\x22#\x22 data-bind=\x22click: items.moveNext, button: { disabled: items.currentPage() == items.pageCount(), icons: { primary: 'fa fa-forward' }, text: false }\x22>Next</a>  <a href=\x22#\x22 data-bind=\x22click: items.moveLast, button: { disabled: items.currentPage() == items.pageCount(), icons: { primary: 'fa fa-fast-forward' }, text: false }\x22>Last</a></div><!-- /ko -->");
templateSystem.addTemplate("img-wysiwyg", "<table tabfocus=\x220\x22 cellspacing=\x220\x22 cellpadding=\x220\x22 data-drop-content=\x22Drop here\x22 data-bind=\x22style: _stylebind, click: function(obj, evt) { $root.selectItem(_item, _data); return true; }, clickBubble: false, fudroppable: { activeClass: 'ui-state-highlight', hoverClass: 'ui-state-draghover' }, droppable: { options: { accept: '.image', activeClass: 'ui-state-highlight', hoverClass: 'ui-state-draghover' }, data: _src, dragged: $root.fileToImage }, css: { selecteditem: $root.isSelectedItem(_item) }, scrollIntoView: $root.isSelectedItem(_item), attr: { 'data-drop-content': $root.t('Drop here'), width: _width, height: _height, align: _align }\x22  class=\x22img-wysiwyg selectable-img\x22 style=\x22display: table;\x22><tr><td class=\x22uploadzone\x22>  <div class=\x22mo-imgselectionhelper\x22></div>  <div class=\x22mo-uploadzone\x22></div>  <div class=\x22img-size\x22 data-bind=\x22text: _size\x22>size</div>  <div class=\x22midtools\x22 data-bind=\x22tooltips: {}\x22>    <!-- ko if: _src() != '' -->    <div title=\x22Remove image\x22 class=\x22tool delete\x22 data-bind=\x22attr: { title: $root.t('Remove image') }, click: _src.bind(_src, ''), clickBubble: false\x22><i class=\x22fa fa-fw fa-trash-o\x22></i></div>    <!-- ko if: typeof $root.editImage !== 'undefined' -->    <div title=\x22Open the image editing tool\x22 class=\x22tool edit\x22 data-bind=\x22attr: { title: $root.t('Open the image editing tool') }, click: $root.editImage.bind($element, _src), clickBubble: false\x22><i class=\x22fa fa-fw fa-pencil\x22></i></div>    <!-- /ko -->    <!-- /ko -->    <!-- ko if: _src() == '' -->    <div title=\x22Upload a new image\x22 data-bind=\x22attr: { title: $root.t('Upload a new image') }\x22 class=\x22tool upload\x22 style=\x22position: relative; overflow: hidden;\x22><i class=\x22fa fa-fw fa-upload\x22></i>      <input class=\x22fileupload nofile\x22 type=\x22file\x22 name=\x22files[]\x22 data-bind=\x22fileupload: { data: _src, onerror: $root.notifier.error, onfile: $root.loadImage, canvasPreview: true }\x22 style=\x22z-index: 20; position: absolute; top: 0; left: 0; right: 0; bottom: 0; min-width: 100%; min-height: 100%; font-size: 999px; text-align: right; filter: alpha(opacity=0); opacity: 0; outline: none; cursor: inherit; display: block\x22>    </div>    <!-- /ko -->  </div>  <!-- ko template: _template --><!-- /ko -->  <!-- ko if: _src() == '' -->    <!--    <img style=\x22display: block;\x22 class=\x22imgplaceholder\x22 width=\x22200\x22 src=\x22\x22 alt=\x22Insert an image here\x22 data-bind=\x22wysiwygSrc: { src: _src.preloaded, placeholder: _placeholdersrc, width: _width, height: _height, method: _method }\x22 />    -->    <span class=\x22fileuploadtext\x22 style=\x22text-align: center; display: -ms-flexbox; display: flex; align-items: center; flex-align: center; justify-content: center; padding: 1em; position: absolute; top: 0; left: 0; right: 0; bottom: 0;\x22><span class=\x22textMiddle\x22 style=\x22 text-shadow: 1px 1px 0 #FFFFFF, 0 0 10px #FFFFFF; font-weight: bold;\x22 data-bind=\x22text: $root.t('Drop an image here')\x22>Drop an image here</span></span>  <!-- /ko -->  <!-- ko if: _src() != '' -->  <!--    <img style=\x22display: block;\x22 width=\x22200\x22 src=\x22\x22 data-bind=\x22preloader: _src, wysiwygSrc: { src: _src.preloaded, placeholder: _placeholdersrc, width: _width, height: _height, method: _method }\x22 />    -->  <!-- /ko -->  <!-- pulsante per la cancellazione -->  <div title=\x22Drop an image here or click the upload button\x22 data-bind=\x22attr: { title: $root.t('Drop an image here or click the upload button') }, tooltips: {}\x22 class=\x22workzone\x22 style=\x22position: absolute; top: 0; left: 0; right: 0; bottom: 0; overflow: hidden;\x22>    <!-- ko if: _src.preloaded && _src() != _src.preloaded() -->PRELOADING....<!-- /ko -->    <!-- ko if: _src() != '' -->      <input class=\x22fileupload withfile\x22 type=\x22file\x22 name=\x22files[]\x22 data-bind=\x22fileupload: { data: _src, onerror: $root.notifier.error, onfile: $root.galleryRecent.unshift.bind($root.galleryRecent), canvasPreview: true }\x22 style=\x22z-index: -20; position: absolute; top: 0; left: 0; right: 0; bottom: 0; min-width: 100%; min-height: 100%; font-zie: 999px; text-align: right; filter: alpha(opacity=0); opacity: 0; outline: none; cursor: inherit; display: block\x22>    <!-- /ko -->    <div class=\x22progress\x22 style=\x22opacity: .5; width: 80%; margin-left: 10%; position: absolute; bottom: 30%; height: 20px; border: 2px solid black;\x22>      <div class=\x22progress-bar progress-bar-success\x22 style=\x22height: 20px; background-color: black; \x22></div>    </div>  </div></table>");
templateSystem.addTemplate("main", "<div id=\x22page\x22 style=\x22display: none;\x22 data-bind=\x22visible: true, css: { withToolbox: $root.showToolbox, withPreviewFrame: showPreviewFrame }\x22>  <div id=\x22main-edit-area\x22 data-bind=\x22click: function(obj, evt) { $root.selectBlock(null); return true; }, clickBubble: false\x22>    <!-- ko withProperties: { templateMode: 'wysiwyg', templateModeFallback: 'show' } -->    <div id=\x22main-wysiwyg-area\x22 data-bind=\x22wysiwygScrollfix: true, scrollable: true, fudroppable: { active: draggingImage }, css: { isdragging: dragging, isdraggingimg: draggingImage }, block: content\x22></div>    <!-- /ko -->  </div>  <div id=\x22toolbar\x22 class=\x22mo\x22 data-bind=\x22tooltips: {}\x22>    <!-- ko if: typeof $root.undo != 'undefined' -->    <span data-bind=\x22buttonset: { }\x22 class=\x22leftButtons\x22>    <a title=\x22Undo last operation\x22 href=\x22#\x22 data-bind=\x22attr: { title: $root.t('Undo last operation') }, click: $root.undo.execute, clickBubble: false, button: { disabled: !$root.undo.enabled(), icons: { primary: 'fa fa-reply' }, label: $root.undo.name, text: true }\x22>UNDO</a>    <a title=\x22Redo last operation\x22 href=\x22#\x22 data-bind=\x22attr: { title: $root.t('Redo last operation') }, click: $root.redo.execute, clickBubble: false, button: { disabled: !$root.redo.enabled(), icons: { primary: 'fa fa-share' }, label: $root.redo.name, text: true }\x22>REDO</a>    </span>    <!-- ko if: $root.debug -->    <a href=\x22#\x22 data-bind=\x22click: $root.undoReset, clickBubble: false, button: { disabled: !$root.undo.enabled() && !$root.redo.enabled(), label: 'reset', text: true }\x22>RESET</a>    <!-- /ko -->    <!-- /ko -->    <span>    <input id=\x22showGallery\x22 type=\x22checkbox\x22 data-bind=\x22checked: $root.showGallery, button: { refreshOn: $root.showGallery,     icons: { primary: 'fa fa-fw fa-picture-o', secondary: null }, text: true, label: $root.t('Gallery') }\x22><label title=\x22Show image gallery\x22 for=\x22showGallery\x22 data-bind=\x22attr: { title: $root.t('Show image gallery') }\x22>show gallery</label></input>    </span>    <input id=\x22previewFrameToggle\x22 type=\x22checkbox\x22 data-bind=\x22checked: $root.showPreviewFrame, button: { refreshOn: $root.showPreviewFrame, icons: { primary: 'fa fa-fw fa-tablet', secondary: null }, text: false, label: $root.t('Preview') }\x22><label title=\x22Show live preview\x22 for=\x22previewFrameToggle\x22 data-bind=\x22attr: { title: $root.t('Show live preview') }\x22>PREVIEW</label></input>    <!-- ko if: $root.debug -->    <a href=\x22#\x22 data-bind=\x22click: $root.export, clickBubble: false, button: { label: 'export', text: true }\x22>EXPORT</a>    <input type=\x22checkbox\x22 data-bind=\x22checked: $root.debug\x22 /> debug    <a href=\x22#\x22 data-bind=\x22click: $root.loadDefaultBlocks, clickBubble: false, button: { icons: { primary: 'fa fa-fw fa-upload' }, label: 'Default', text: true }\x22>LOAD BLOCKS</a>    [<a id=\x22subscriptionsCount\x22 href=\x22javascript:viewModel.loopSubscriptionsCount()\x22>subs</a>]    <!-- /ko -->    <span data-bind=\x22visible: false\x22>    <input type=\x22checkbox\x22 data-bind=\x22checked: $root.showToolbox\x22 /> toolbox    </span>    <div class=\x22rightButtons\x22>    <label for=\x22templateTitle\x22 style=\x22color:#eee; font-weight:700; margin-right:5px;\x22>TYTUŁ</label>    <input type=\x22text\x22 name=\x22template_title\x22 id=\x22templateTitle\x22 style=\x22margin-right:20px; width:200px; height:26px;\x22 />    <!-- ko if: typeof $root.save !== 'undefined' -->    <a title=\x22Save template\x22 href=\x22#\x22 data-bind=\x22attr: { title: $root.t('Save template') }, click: $root.save.execute, clickBubble: false, button: { disabled: !$root.save.enabled(), icons: { primary: 'fa fa-fw fa-cloud-upload' }, label: $root.t($root.save.name), text: true }\x22>ZAPISZ</a>    <!-- /ko -->    <!-- ko if: typeof $root.test !== 'undefined' -->    <a title=\x22Show preview and send test\x22 href=\x22#\x22 data-bind=\x22attr: { title: $root.t('Show preview and send test') }, click: $root.test.execute, clickBubble: false, button: { disabled: !$root.test.enabled(), icons: { primary: 'fa fa-fw fa-paper-plane' }, label: $root.t($root.test.name), text: true }\x22>TEST</a>    <!-- /ko -->    <!-- ko if: typeof $root.download !== 'undefined' -->    <form id=\x22downloadForm\x22 action=\x22#\x22 method=\x22POST\x22>    <input type=\x22hidden\x22 name=\x22action\x22 value=\x22download\x22 />    <input type=\x22hidden\x22 name=\x22filename\x22 value=\x22email.html\x22 />    <input type=\x22hidden\x22 name=\x22html\x22 id=\x22downloadHtmlTextarea\x22 />    <a title=\x22Download template\x22 href=\x22#\x22 data-bind=\x22attr: { title: $root.t('Download template') }, click: $root.download.execute, clickBubble: false, button: { disabled: !$root.download.enabled(), icons: { primary: 'fa fa-fw fa-download' }, label: $root.t($root.download.name), text: true }\x22>ZAPISZ NA DYSK</a>    </form>    <!-- /ko -->    </div>  </div>  <!-- ko if: $root.showToolbox -->  <div id=\x22main-toolbox\x22 class=\x22mo\x22 data-bind=\x22scrollable: true, withProperties: { templateMode: 'edit' }\x22>    <div data-bind=\x22template: { name: 'toolbox' }\x22></div>  </div>  <!-- /ko -->    <div id=\x22main-preview\x22 class=\x22mo\x22 data-bind=\x22scrollable: true, if: $root.showPreviewFrame\x22>    <div id=\x22preview-toolbar\x22>      <div data-bind=\x22visible: $root.showPreviewFrame, buttonset: { }\x22 style=\x22display: inline-block\x22>        <input id=\x22previewLarge\x22 type=\x22radio\x22 name=\x22previewMode\x22 value=\x22large\x22 data-bind=\x22checked: $root.previewMode, button: { text: false, label: 'large', icons: { primary: 'fa fa-fw fa-desktop' } }\x22 />        <label for=\x22previewLarge\x22 title=\x22Large screen\x22 data-bind=\x22attr: { title: $root.t('Large screen') }\x22>Large screen</label>        <input id=\x22previewDesktop\x22 type=\x22radio\x22 name=\x22previewMode\x22 value=\x22desktop\x22 data-bind=\x22checked: $root.previewMode, button: { text: false, label: 'desktop', icons: { primary: 'fa fa-fw fa-tablet' } }\x22 />        <label for=\x22previewDesktop\x22 title=\x22Tablet\x22 data-bind=\x22attr: { title: $root.t('Tablet') }\x22>Tablet</label>        <input id=\x22previewMobile\x22 type=\x22radio\x22 name=\x22previewMode\x22 value=\x22mobile\x22 data-bind=\x22checked: $root.previewMode, button: { text: false, label: 'mobile', icons: { primary: 'fa fa-fw fa-mobile' } }\x22 />        <label for=\x22previewMobile\x22 title=\x22Smartphone\x22 data-bind=\x22attr: { title: $root.t('Smartphone') }\x22>Smartphone</label>      </div>    </div>    <div id=\x22frame-container\x22 data-bind=\x22css: { desktop: $root.previewMode() == 'desktop', mobile: $root.previewMode() == 'mobile', large: $root.previewMode() == 'large' }\x22>      <iframe data-bind=\x22bindIframe: $data\x22></iframe>    </div>  </div>  <div class=\x22mo\x22 id=\x22mo-body\x22></div>  <!-- TODO REMOVE ME  <div id=\x22incompatible-browser\x22 title=\x22Unsupported browser\x22 style=\x22display: none\x22 data-bind=\x22attr: { title: $root.t('Usupported browser') }, html: '<p>Your browser is not supported.</p><p>Use a different browser or try updaring your browser.</p><p>Supported browsers: <ul><li>Internet Explorer &gt;= 10</li><li>Google Chrome &gt;= 30</li><li>Apple Safari &gt;= 5</li><li>Mozilla Firefix &gt;= 20</li></ul></p>'\x22>    Unsupported browser  </div>  -->  <div id=\x22incompatible-template\x22 title=\x22Saved model is obsolete\x22 style=\x22display: none\x22 data-bind=\x22attr: { title: $root.t('Saved model is obsolete') }, html: $root.t('<p>The saved model has been created with a previous, non completely compatible version, of the template</p><p>Some content or style in the model <b>COULD BE LOST</b> if you will <b>save</b></p><p>Contact us for more informations!</p>')\x22>    Incompatible template  </div>  <div id=\x22fake-image-editor\x22 title=\x22Fake image editor\x22 style=\x22display: none\x22 data-bind=\x22attr: { title: $root.t('Fake image editor') }, html: $root.t('<p>Fake image editor</p>')\x22>    <p>Fake image editor</p>  </div></div><!-- ko if: $root.logoPath --><div id=\x22loading\x22 class=\x22loading\x22 style=\x22display: block; width: 300px; text-align: center; height: 32px; position: absolute; top:0; bottom: 0; left: 0; right: 0;  margin: auto;\x22 data-bind=\x22attr: { style: 'position: absolute; top: 5px; left: 6px; z-index: 150;'}, css: { loading: false }\x22>  <a href=\x22/\x22 data-bind=\x22attr: { href: $root.logoUrl, alt: $root.logoAlt }\x22><img data-bind=\x22attr: { src: $root.logoPath }\x22 width=\x2232\x22 height=\x2232\x22 alt=\x22mosaico\x22 border=\x220\x22 /></a>  <div style=\x22opacity: 0\x22 data-bind=\x22visible: false\x22>Oppps... !!</div></div><!-- /ko -->");
templateSystem.addTemplate("toolbox", "<div id=\x22tooltabs\x22 class=\x22tabs_horizontal button_color\x22 data-bind=\x22tabs: { active: $root.selectedTool }\x22>  <ul>    <li data-bind=\x22tooltips: {}\x22><a title=\x22Blocks ready to be added to the template\x22 data-local=\x22true\x22 href=\x22#toolblocks\x22 data-bind=\x22attr: { title: $root.t('Blocks ready to be added to the template') }\x22><i class=\x22fa fa-fw fa-cubes\x22></i> <span data-bind=\x22html: $root.t('Blocks')\x22>Blocks</span></a></li>    <li data-bind=\x22tooltips: {}\x22><a title=\x22Edit content options\x22 href=\x22#toolcontents\x22 data-local=\x22true\x22 data-bind=\x22attr: { title: $root.t('Edit content options') }\x22><i class=\x22fa fa-fw fa-pencil\x22></i> <span data-bind=\x22html: $root.t('Content')\x22>Content</span></a></li>    <li data-bind=\x22tooltips: {}\x22><a title=\x22Edit style options\x22 href=\x22#toolstyles\x22 data-local=\x22true\x22 data-bind=\x22attr: { title: $root.t('Edit style options') }\x22><i class=\x22fa fa-fw fa-paint-brush\x22></i> <span data-bind=\x22html: $root.t('Style')\x22>Style</span></a></li>  </ul>  <div id=\x22toolblocks\x22 data-bind=\x22scrollable: true\x22>    <div class=\x22block-list\x22 data-bind=\x22foreach: blockDefs\x22 style=\x22text-align: center\x22>      <div class=\x22draggable-item\x22 data-bind=\x22withProperties: { templateMode: 'show' }\x22>        <div class=\x22block\x22 data-bind=\x22extdraggable: { connectClass: 'sortable-blocks-edit', data: $data, dropContainer: '#main-wysiwyg-area', dragging: $root.dragging, 'options': { handle: '.handle', distance: 10, 'appendTo': '#page' } }, click: $root.addBlock\x22 style=\x22position: relative;\x22>          <div title=\x22Click or drag to add this block to the template\x22 class=\x22handle\x22 data-bind=\x22attr: { title: $root.t('Click or drag to add this block to the template') }, tooltips: {}\x22></div>          <img data-bind=\x22attr: { alt: $root.t('Block __name__', { name: ko.utils.unwrapObservable(type) }), src: $root.templatePath('edres/'+ko.utils.unwrapObservable(type)+'.png') }\x22 alt=\x22Block __name__\x22 />        </div>        <a href=\x22#\x22 class=\x22addblockbutton\x22 data-bind=\x22click: $root.addBlock, button: { label: $root.t('Add') }\x22>Add</a>      </div>    </div>  </div>  <div id=\x22toolcontents\x22 data-bind=\x22scrollable: true\x22>    <!-- ko if: $root.selectedBlock() !== null -->    <div data-bind=\x22block: $root.selectedBlock\x22></div>    <!-- /ko -->    <!-- ko if: $root.selectedBlock() == null -->    <div class=\x22noSelectedBlock\x22 data-bind=\x22text: $root.t('By clicking on message parts you will select a block and content options, if any, will show here')\x22>By clicking on message parts you will select a block and content options, if any, will show here</div>    <!-- /ko -->    <!-- ko block: content --><!-- /ko -->  </div>    <div id=\x22toolstyles\x22 data-bind=\x22scrollable: true, withProperties: { templateMode: 'styler' }\x22>    <!-- ko if: typeof $root.content().theme === 'undefined' || typeof $root.content().theme().scheme === 'undefined' || $root.content().theme().scheme() === 'custom' -->      <!-- ko if: $root.selectedBlock() !== null -->      <div data-bind=\x22block: $root.selectedBlock, css: { workLocal: $root.selectedBlock().customStyle, workGlobal: typeof $root.selectedBlock().customStyle === 'undefined' || !$root.selectedBlock().customStyle() }\x22></div>      <!-- /ko -->      <!-- ko if: $root.selectedBlock() == null -->      <div class=\x22noSelectedBlock\x22 data-bind=\x22text: $root.t('By clicking on message parts you will select a block and style options, if available, will show here')\x22>By clicking on message parts you will select a block and style options, if available, will show here</div>      <!-- /ko -->      <div class=\x22workGlobalContent\x22>      <!-- ko block: content --><!-- /ko -->      </div>    <!-- /ko -->  </div></div>        <div id=\x22toolimages\x22 class=\x22slidebar\x22 data-bind=\x22scrollable: true, css: { hidden: $root.showGallery() === false }\x22>  <div class=\x22close\x22 data-bind=\x22click: $root.showGallery.bind($element, false);\x22>X</div>  <span class=\x22pane-title\x22 data-bind=\x22text: $root.t('Gallery:')\x22>Gallery:</span>  <div data-drop-content=\x22Drop here\x22 class=\x22img-dropzone pane uploadzone\x22 data-bind=\x22attr: { 'data-drop-content': $root.t('Drop here') }, fudroppable: { activeClass: 'ui-state-highlight', hoverClass: 'ui-state-draghover' }\x22>  <div class=\x22mo-uploadzone\x22 style=\x22position: relative; padding: 2em; border: 2px dotted #808080\x22>     <input class=\x22fileupload\x22 type=\x22file\x22 multiple name=\x22files[]\x22 data-bind=\x22fileupload: { onerror: $root.notifier.error, onfile: $root.loadImage }\x22 style=\x22z-index: 10; position: absolute; top: 0; left: 0; right: 0; bottom: 0; min-width: 100%; min-height: 100%; font-zie: 999px; text-align: right; filter: alpha(opacity=0); opacity: 0; outline: none; cursor: inherit; display: block\x22>     <span data-bind=\x22text: $root.t('Click or drag files here')\x22>Click or drag files here</span>     <div class=\x22workzone\x22 style=\x22position: absolute; top: 0; left: 0; right: 0; bottom: 0; overflow: hidden;\x22>       <div class=\x22progress\x22 style=\x22opacity: .5; width: 80%; margin-left: 10%; position: absolute; bottom: 30%; height: 20px; border: 2px solid black;\x22>         <div class=\x22progress-bar progress-bar-success\x22 style=\x22height: 20px; background-color: black; \x22></div>       </div>     </div>  </div>  </div>  <!-- ko if: $root.showGallery() -->  <div id=\x22toolimagestab\x22 class=\x22tabs_horizontal\x22 data-bind=\x22tabs: { active: $root.selectedImageTab }\x22>    <ul>      <li data-bind=\x22tooltips: {}\x22><a title=\x22Session images\x22 data-local=\x22true\x22 href=\x22#toolimagesrecent\x22 data-bind=\x22attr: { title: $root.t('Session images') }, text: $root.t('Recents')\x22>Recents</a></li>      <li data-bind=\x22tooltips: {}\x22><a title=\x22Remote gallery\x22 data-local=\x22true\x22 href=\x22#toolimagesgallery\x22 data-bind=\x22attr: { title: $root.t('Remote gallery') }, text: $root.t('Gallery')\x22>Gallery</a></li>    </ul>    <div id=\x22toolimagesrecent\x22>      <!-- ko if: galleryRecent().length == 0 --><div class=\x22galleryEmpty\x22 data-bind=\x22text: $root.t('No images uploaded, yet')\x22>No images uploaded, yet</div><!-- /ko -->      <!-- ko template: {name: 'gallery-images', data: { items: galleryRecent } } --># recent gallery #<!-- /ko -->    </div>    <div id=\x22toolimagesgallery\x22 style=\x22text-align: center\x22>    <!-- ko if: $root.galleryLoaded() === false --><a class=\x22loadbutton\x22 title=\x22Show images from the gallery\x22 href=\x22#\x22 data-bind=\x22attr: { title: $root.t('Show images from the gallery') }, click: $root.loadGallery, button: { disabled: $root.galleryLoaded, icons: { primary: 'fa fa-fw fa-picture-o' }, label: $root.galleryLoaded() == 'loading' ? $root.t('Loading...') : $root.t('Load gallery'), text: true }\x22># load gally #</a><!-- /ko -->    <!-- ko if: $root.galleryLoaded() === 'loading' --><div class=\x22galleryEmpty\x22 data-bind=\x22text: $root.t('Loading gallery...')\x22>Loading gallery...</div><!-- /ko -->    <!-- ko if: $root.galleryLoaded() === 0 --><div class=\x22galleryEmpty\x22 data-bind=\x22text: $root.t('The gallery is empty')\x22>The gallery is empty</div><!-- /ko -->    <!-- ko template: {name: 'gallery-images', data: { items: galleryRemote } } --># remote gallery #<!-- /ko -->    </div>  </div>  <!-- /ko --></div><div id=\x22tooldebug\x22 class=\x22slidebar\x22 data-bind=\x22css: { hidden: $root.debug() === false }\x22>  <div class=\x22close\x22 data-bind=\x22click: $root.debug.bind($element, false);\x22>X</div>    <!-- ko if: $root.debug -->  Content:  <pre data-bind='text: ko.toJSON(content, null, 2)' style=\x22overflow: auto; height: 20%\x22></pre>  BlockDefs:  <pre data-bind='text: ko.toJSON(blockDefs, null, 2)' style=\x22overflow: auto; height: 20%\x22></pre>  <!-- /ko -->  <a href=\x22#\x22 data-bind=\x22click: $root.exportHTMLtoTextarea.bind($element, '#outputhtml'); clickBubble: false, button: { text: true, label:'Generate' }\x22>Output</a>  <a href=\x22#\x22 data-bind=\x22click: $root.exportJSONtoTextarea.bind($element, '#outputhtml'); clickBubble: false, button: { text: true, label:'Export' }\x22>Export</a>  <a href=\x22#\x22 data-bind=\x22click: $root.importJSONfromTextarea.bind($element, '#outputhtml'); clickBubble: false, button: { text: true, label:'Import' }\x22>Import</a>  <textarea id=\x22outputhtml\x22 rows=\x2210\x22 style=\x22width: 100%;\x22></textarea></div><div id=\x22tooltheme\x22 class=\x22ui-widget slidebar\x22 data-bind=\x22css: { hidden: $root.showTheme() === false }\x22>  <div class=\x22close\x22 data-bind=\x22click: $root.showTheme.bind($element, false);\x22>X</div>    <!-- ko withProperties: { templateMode: 'styler' } -->    <!-- ko if: $root.showTheme -->      <!-- ko block: $root.content().theme --><!-- /ko -->    <!-- /ko -->  <!-- /ko --></div>");
});
