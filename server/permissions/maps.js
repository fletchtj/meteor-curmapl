Maps.allow({
    insert: function (userId, doc) {
        return true;
    },
    update: function (userId, doc, fields, modifier) {
        return true;
    },
    remove: function (userId, doc) {
        return false;
    },
    fetch: ['_id', 'orgid', 'created', 'modified']
});