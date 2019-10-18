const configData: any = {
    mongodbUrl: "mongodb://localhost:27017/helloworld",
    addConfig: function (opt: any) {
        Object.assign(configData, opt);
    }
}

export default configData;