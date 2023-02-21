const mock = require('../mockData.json');

const addItem = async (parent, args, contextValue, info) => {
    await mock.push({ id: mock.length++, name: args.name, description: args.description });
    return mock;
}

module.exports = {
    addItem
}