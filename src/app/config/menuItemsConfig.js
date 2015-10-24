define(['appModule'], function () {
    appModule.config(function (menuItemsProvider) {
        /* param => item
         {
         title : string , url: string, icon: string,
         children: [
         {title : string,url: string,icon: string}
         ]
         }
         */
        debugger;
        menuItemsProvider.add({
            title: 'Document',
            url: '#/',
            icon: '',
            children: [
                {
                    title: 'DocumentChild',
                    url: '#/',
                    icon: ''
                }
            ]
        }).add({
            title: 'Document',
            url: '#/',
            icon: '',
            children: [
                {
                    title: 'DocumentChild',
                    url: '#/',
                    icon: ''
                }
            ]
        })
    })
})