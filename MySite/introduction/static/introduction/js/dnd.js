/**
 * Created by Raymund on 2016.03.13..
 */
(function() {
    // getElementById
    function $id(id) {
        return document.getElementById(id);
    }

    // output information
    function Output(msg) {
        var m = $id("messages");
        m.innerHTML = msg + m.innerHTML;
    }

    //file drag hover style
    function FileDragHover(e) {
        e.stopPropagation();
        e.preventDefault();
        e.target.className = (e.type == "dragover" ? "hover" : "");
    }

    //file selection
    function FileSelectHandler(e) {

        //cancel event and hover styling
        FileDragHover(e);

        //fetch FileList object
        var files = e.target.files || e.dataTransfer.files;

        //process all File objects
        for (var i = 0, f; f = files[i]; i++) {
            ParseFile(f);
        }

    }

    function ParseFile(file) {

		Output(
			"<p>File information: <strong>" + file.name +
			"</strong> type: <strong>" + file.type +
			"</strong> size: <strong>" + file.size +
			"</strong> bytes</p>"
		);

        var reader = new FileReader();

        //display text
        if (file.type.indexOf("text") == 0) {
            reader.onload = function(e) {
                Output(
                    "<p><strong>" + file.name + "</strong></p><pre>" +
                    e.target.result.replace(/</g, "&lt;").replace(/>/g, "&gt;")
                    + "</pre>"
                );
            }
            reader.readAsText(file);

        }


		// display an image
		if (file.type.indexOf("image") == 0) {

			reader.onload = function(e) {
				Output(
					"<p><strong>" + file.name + ":</strong><br />" +
					'<img src="' + e.target.result + '" /></p>'
				);
			}
			reader.readAsDataURL(file);
		}

    }

    // initialize
    function Init() {

        var fileSelect = $id("fileSelect"),
            fileDrag = $id("fileDrag"),
            submitButton = $id("submitButton");

        //file select
        fileSelect.addEventListener("change", FileSelectHandler, false);

        //is XHR2 available?
        var xhr = new XMLHttpRequest();
        if (xhr.upload) {

            //file drop
            fileDrag.addEventListener("dragover", FileDragHover, false);
            fileDrag.addEventListener("dragleave", FileDragHover, false);
            fileDrag.addEventListener("drop", FileSelectHandler, false);
            fileDrag.style.display = "block";

            //remove submit button
            submitButton.style.display = "none";

        }

    }

    // call initialization file
	if (window.File && window.FileList && window.FileReader) {
		Init();
	}

})();