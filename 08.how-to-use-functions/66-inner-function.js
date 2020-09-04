function something(gree, name) {
    function firstName() {
        if (name) {
            return name.split(' ')[1]
        }
    }

    let message = gree + ' ' + firstName()
    console.log(message);
}

something('Good morning', 'Mks Tamin')