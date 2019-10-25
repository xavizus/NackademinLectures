(function() {
    'use strict';
    window.addEventListener('load', function() {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === true) {
                    overview();
                }
                event.preventDefault();
                event.stopPropagation();
                event.preventDefault();

                form.classList.add('was-validated');

            }, false);
        });
    }, false);
})();

function overview(event) {
    let allElements = document.getElementsByClassName("form-control");
    for (let element of allElements) {
        console.log(element.value);
    }
}