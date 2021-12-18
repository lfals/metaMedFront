//listagen de páginas e permissão
const groups = [
    {
        "name": "Dashboard",
        "group":"dashboard",
        "access": ["administrator"]

    },
    {
        "name": "Utilidades",
        "group":"utilidades",
        "access": ["administrator","user", "colaborator"]
    }
    
]

const pages = [
{
    "group": "dashboard",
    "name":"Dashboard",
    "access": ["administrator","user", "colaborator"],
    "route": "/"

},
{
    "group": "utilidades",
    "name":"Manobras",
    "access": ["administrator","user", "colaborator"],
    "route": "/maneuvers"
},
{
    "group": "utilidades",
    "name":"Siglas",
    "access": ["administrator","user", "colaborator"],
    "route": "/acronyms"
},
{
    "group": "utilidades",
    "name":"Funções",
    "access": ["administrator","user", "colaborator"],
    "route": "/functions"

},
{
    "group": "utilidades",
    "name":"Usuários",
    "access": ["administrator"],
    "route": "/users"

}
]

export { pages, groups}