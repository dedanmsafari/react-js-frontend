import _ from "lodash";
//items to include in the list
//the page number 1..2..4.
//logic for finding the start number of your pages
//pagesize i.e.. of 4 or 3 or 2 items
export function paginate(items, pageNumber, pageSize)
{
const startIndex = (pageNumber - 1) * pageSize;//logic to find the start point of your pages
return _(items) //return a lodash array
.slice(startIndex)
.take(pageSize)
///.value returns it to a regular array
.value();

}