/// <reference path="../typings/jquery/jquery.d.ts" />
class BoolMethod
{
    Store(value: bool)
    {
        var url = "/BoolMethod/Store";
        var data = { value: value };
        $.ajax({
            url: url,
            data: data,
        });
    }
}
