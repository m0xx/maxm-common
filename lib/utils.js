exports.wrapIds = function(ids) {
    return ids.map((id) =>  {
        return '\'' + id + '\'';
    }).join(',')
}