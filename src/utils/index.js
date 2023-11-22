const infoCleaner = arr => {
    if (!arr || !Array.isArray(arr)) {
        // Manejar el caso en que arr es undefined o no es un array
        return [];
    }

    return arr.map(user => {
        return {
            name: user.name,
            email: user.email,
            phone: user.phone,
            created: false,
        };
    });
}

module.exports = infoCleaner;
