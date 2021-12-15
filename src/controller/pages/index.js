//listagen de páginas e permissão
const groups = [
    {
        "name":"dashboard",
        "access": ["administrator"]

    },
    {
        "name":"utilidades",
        "access": ["administrator","user", "colaborator"]
    }
    
]

const pages = [
{
    "group": "utilidades",
    "name":"Manobras",
    "access": ["administrator","user", "colaborator"],
    "route": "/utilidades"
},
{
    "group": "dashboard",
    "name":"Dashboard",
    "access": ["administrator","user", "colaborator"],
    "route": "/dashboard"

},
{
    "group": "utilidades",
    "name":"Funções",
    "access": ["administrator","user", "colaborator"],
    "route": "/funcoes"

}
]

export { pages, groups}