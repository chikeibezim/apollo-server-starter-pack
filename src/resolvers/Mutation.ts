const addItem = async (parent, args, contextValue, info) => {
    let data = contextValue.mockData;
    await data.push({ "id": data.length + 1, "name": args.name, "description": args.description });
    return args;
}

module.exports = {
    addItem
}