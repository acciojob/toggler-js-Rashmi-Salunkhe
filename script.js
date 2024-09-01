//your JS code here. If required.
const checkboxes = document.querySelectorAll('.toggle');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        // Filter the checkboxes to find the ones that are checked
        const checkedCheckboxes = Array.from(checkboxes).filter(cb => cb.checked);

        // If more than 2 checkboxes are checked, uncheck the first one checked
        if (checkedCheckboxes.length > 2) {
            checkedCheckboxes[0].checked = false;
        }
    });
});
