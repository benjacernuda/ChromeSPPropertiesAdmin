
import Utils from './utils';

let divContainer = {
    padding: '5px',
    margin: 0
}

let btnStyles = {
    display: 'inline-block',
    height: '26px',
    minWidth:'0',
    borderRadius: '5px',
    padding: '3px 10px 4px 25px',
    margin: '5px',
    backgroundPosition: '50% 50%',
    backgroundRepeat: 'no-repeat',
    textDecoration: 'none',
    color: 'black',
    fontWeight: 'bold',
    border: '1px solid'
}

let tableCellStyle = {
    padding: '5px'
}

let inputStyles = {
    width: '240px'
}
let contentStyles = {
    overflow: 'auto',
    height: '90%'
}
let listStyle = { marginTop: '6.5px', listStyle: 'none', paddingLeft: '5px' };

export let SpPropertyBagStyles = {
    contentStyles: contentStyles,
    tableStyles: {
        borderSpacing: 0,
        borderCollapse: 'collapse',
        width: '100%'
    },
    tableContainer: {
        marginTop: '6.5px'
    }
}

export let KeyValueItemStyles = {
    deleteBtnStyle: Utils.mergeObjects({
        backgroundImage: 'url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDQ4Mi40MjggNDgyLjQyOSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDgyLjQyOCA0ODIuNDI5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTM4MS4xNjMsNTcuNzk5aC03NS4wOTRDMzAyLjMyMywyNS4zMTYsMjc0LjY4NiwwLDI0MS4yMTQsMGMtMzMuNDcxLDAtNjEuMTA0LDI1LjMxNS02NC44NSw1Ny43OTloLTc1LjA5OCAgICBjLTMwLjM5LDAtNTUuMTExLDI0LjcyOC01NS4xMTEsNTUuMTE3djIuODI4YzAsMjMuMjIzLDE0LjQ2LDQzLjEsMzQuODMsNTEuMTk5djI2MC4zNjljMCwzMC4zOSwyNC43MjQsNTUuMTE3LDU1LjExMiw1NS4xMTcgICAgaDIxMC4yMzZjMzAuMzg5LDAsNTUuMTExLTI0LjcyOSw1NS4xMTEtNTUuMTE3VjE2Ni45NDRjMjAuMzY5LTguMSwzNC44My0yNy45NzcsMzQuODMtNTEuMTk5di0yLjgyOCAgICBDNDM2LjI3NCw4Mi41MjcsNDExLjU1MSw1Ny43OTksMzgxLjE2Myw1Ny43OTl6IE0yNDEuMjE0LDI2LjEzOWMxOS4wMzcsMCwzNC45MjcsMTMuNjQ1LDM4LjQ0MywzMS42NmgtNzYuODc5ICAgIEMyMDYuMjkzLDM5Ljc4MywyMjIuMTg0LDI2LjEzOSwyNDEuMjE0LDI2LjEzOXogTTM3NS4zMDUsNDI3LjMxMmMwLDE1Ljk3OC0xMywyOC45NzktMjguOTczLDI4Ljk3OUgxMzYuMDk2ICAgIGMtMTUuOTczLDAtMjguOTczLTEzLjAwMi0yOC45NzMtMjguOTc5VjE3MC44NjFoMjY4LjE4MlY0MjcuMzEyeiBNNDEwLjEzNSwxMTUuNzQ0YzAsMTUuOTc4LTEzLDI4Ljk3OS0yOC45NzMsMjguOTc5SDEwMS4yNjYgICAgYy0xNS45NzMsMC0yOC45NzMtMTMuMDAxLTI4Ljk3My0yOC45Nzl2LTIuODI4YzAtMTUuOTc4LDEzLTI4Ljk3OSwyOC45NzMtMjguOTc5aDI3OS44OTdjMTUuOTczLDAsMjguOTczLDEzLjAwMSwyOC45NzMsMjguOTc5ICAgIFYxMTUuNzQ0eiIgZmlsbD0iI0Q4MDAyNyIvPgoJCTxwYXRoIGQ9Ik0xNzEuMTQ0LDQyMi44NjNjNy4yMTgsMCwxMy4wNjktNS44NTMsMTMuMDY5LTEzLjA2OFYyNjIuNjQxYzAtNy4yMTYtNS44NTItMTMuMDctMTMuMDY5LTEzLjA3ICAgIGMtNy4yMTcsMC0xMy4wNjksNS44NTQtMTMuMDY5LDEzLjA3djE0Ny4xNTRDMTU4LjA3NCw0MTcuMDEyLDE2My45MjYsNDIyLjg2MywxNzEuMTQ0LDQyMi44NjN6IiBmaWxsPSIjRDgwMDI3Ii8+CgkJPHBhdGggZD0iTTI0MS4yMTQsNDIyLjg2M2M3LjIxOCwwLDEzLjA3LTUuODUzLDEzLjA3LTEzLjA2OFYyNjIuNjQxYzAtNy4yMTYtNS44NTQtMTMuMDctMTMuMDctMTMuMDcgICAgYy03LjIxNywwLTEzLjA2OSw1Ljg1NC0xMy4wNjksMTMuMDd2MTQ3LjE1NEMyMjguMTQ1LDQxNy4wMTIsMjMzLjk5Niw0MjIuODYzLDI0MS4yMTQsNDIyLjg2M3oiIGZpbGw9IiNEODAwMjciLz4KCQk8cGF0aCBkPSJNMzExLjI4NCw0MjIuODYzYzcuMjE3LDAsMTMuMDY4LTUuODUzLDEzLjA2OC0xMy4wNjhWMjYyLjY0MWMwLTcuMjE2LTUuODUyLTEzLjA3LTEzLjA2OC0xMy4wNyAgICBjLTcuMjE5LDAtMTMuMDcsNS44NTQtMTMuMDcsMTMuMDd2MTQ3LjE1NEMyOTguMjEzLDQxNy4wMTIsMzA0LjA2Nyw0MjIuODYzLDMxMS4yODQsNDIyLjg2M3oiIGZpbGw9IiNEODAwMjciLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K)'
    }, btnStyles),
    updateBtnStyle: Utils.mergeObjects({
        backgroundImage: 'url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDQ5NC45MzYgNDk0LjkzNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDk0LjkzNiA0OTQuOTM2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTM4OS44NDQsMTgyLjg1Yy02Ljc0MywwLTEyLjIxLDUuNDY3LTEyLjIxLDEyLjIxdjIyMi45NjhjMCwyMy41NjItMTkuMTc0LDQyLjczNS00Mi43MzYsNDIuNzM1SDY3LjE1NyAgICBjLTIzLjU2MiwwLTQyLjczNi0xOS4xNzQtNDIuNzM2LTQyLjczNVYxNTAuMjg1YzAtMjMuNTYyLDE5LjE3NC00Mi43MzUsNDIuNzM2LTQyLjczNWgyNjcuNzQxYzYuNzQzLDAsMTIuMjEtNS40NjcsMTIuMjEtMTIuMjEgICAgcy01LjQ2Ny0xMi4yMS0xMi4yMS0xMi4yMUg2Ny4xNTdDMzAuMTI2LDgzLjEzLDAsMTEzLjI1NSwwLDE1MC4yODV2MjY3Ljc0M2MwLDM3LjAyOSwzMC4xMjYsNjcuMTU1LDY3LjE1Nyw2Ny4xNTVoMjY3Ljc0MSAgICBjMzcuMDMsMCw2Ny4xNTYtMzAuMTI2LDY3LjE1Ni02Ny4xNTVWMTk1LjA2MUM0MDIuMDU0LDE4OC4zMTgsMzk2LjU4NywxODIuODUsMzg5Ljg0NCwxODIuODV6IiBmaWxsPSIjMDA2REYwIi8+CgkJPHBhdGggZD0iTTQ4My44NzYsMjAuNzkxYy0xNC43Mi0xNC43Mi0zOC42NjktMTQuNzE0LTUzLjM3NywwTDIyMS4zNTIsMjI5Ljk0NGMtMC4yOCwwLjI4LTMuNDM0LDMuNTU5LTQuMjUxLDUuMzk2bC0yOC45NjMsNjUuMDY5ICAgIGMtMi4wNTcsNC42MTktMS4wNTYsMTAuMDI3LDIuNTIxLDEzLjZjMi4zMzcsMi4zMzYsNS40NjEsMy41NzYsOC42MzksMy41NzZjMS42NzUsMCwzLjM2Mi0wLjM0Niw0Ljk2LTEuMDU3bDY1LjA3LTI4Ljk2MyAgICBjMS44My0wLjgxNSw1LjExNC0zLjk3LDUuMzk2LTQuMjVMNDgzLjg3Niw3NC4xNjljNy4xMzEtNy4xMzEsMTEuMDYtMTYuNjEsMTEuMDYtMjYuNjkyICAgIEM0OTQuOTM2LDM3LjM5Niw0OTEuMDA3LDI3LjkxNSw0ODMuODc2LDIwLjc5MXogTTQ2Ni42MSw1Ni44OTdMMjU3LjQ1NywyNjYuMDVjLTAuMDM1LDAuMDM2LTAuMDU1LDAuMDc4LTAuMDg5LDAuMTA3ICAgIGwtMzMuOTg5LDE1LjEzMUwyMzguNTEsMjQ3LjNjMC4wMy0wLjAzNiwwLjA3MS0wLjA1NSwwLjEwNy0wLjA5TDQ0Ny43NjUsMzguMDU4YzUuMDM4LTUuMDM5LDEzLjgxOS01LjAzMywxOC44NDYsMC4wMDUgICAgYzIuNTE4LDIuNTEsMy45MDUsNS44NTUsMy45MDUsOS40MTRDNDcwLjUxNiw1MS4wMzYsNDY5LjEyNyw1NC4zOCw0NjYuNjEsNTYuODk3eiIgZmlsbD0iIzAwNkRGMCIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=)'
    }, btnStyles),
    saveBtnStyle: Utils.mergeObjects({
        backgroundImage: 'url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDQyNC4xMTMgNDI0LjExMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDI0LjExMyA0MjQuMTEzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTM3Ni45NTUsMTIwLjMwN2MtNi41MTQsMC0xMS44MDcsNS4yODYtMTEuODA3LDExLjgwN3YyMTUuNTkzYzAsMjIuNzg1LTE4LjUzOSw0MS4zMjItNDEuMzIyLDQxLjMyMkg2NC45MzYgICAgYy0yMi43ODEsMC00MS4zMjItMTguNTM3LTQxLjMyMi00MS4zMjJWODguODE2YzAtMjIuNzg2LDE4LjU0MS00MS4zMjMsNDEuMzIyLTQxLjMyM2gyNTguODljNi41MjUsMCwxMS44MDktNS4yODcsMTEuODA5LTExLjgwNyAgICBjMC02LjUyMS01LjI4MS0xMS44MDctMTEuODA5LTExLjgwN0g2NC45MzZDMjkuMTM3LDIzLjg4LDAsNTMuMDEsMCw4OC44MTV2MjU4Ljg5MWMwLDM1LjgwNiwyOS4xMzcsNjQuOTM2LDY0LjkzNiw2NC45MzZoMjU4Ljg5ICAgIGMzNS44MTIsMCw2NC45MzgtMjkuMTMsNjQuOTM4LTY0LjkzNlYxMzIuMTEzQzM4OC43NjIsMTI1LjU5NCwzODMuNDgyLDEyMC4zMDcsMzc2Ljk1NSwxMjAuMzA3eiIgZmlsbD0iIzkxREM1QSIvPgoJCTxwYXRoIGQ9Ik00MjAuNjU0LDE0LjkzMWMtNC42MTEtNC42MTItMTIuMDk2LTQuNjEyLTE2LjY5MywwbC0yMzcuMjQsMjM3LjIyOGwtNTkuMjk3LTU5LjI5MWMtNC42MTEtNC42MTEtMTIuMDg0LTQuNjExLTE2LjY5NSwwICAgIGMtNC42MTEsNC42MTItNC42MTEsMTIuMDg2LDAsMTYuNjk1bDY3LjY1Niw2Ny42MzljMi4zMDcsMi4zMDgsNS4zMjgsMy40NTksOC4zNDgsMy40NTljMy4wMjEsMCw2LjA0My0xLjE1MSw4LjM0OC0zLjQ1OSAgICBjMC0wLjAwNiwwLTAuMDEyLDAuMDEyLTAuMDE4TDQyMC42NTQsMzEuNjI1QzQyNS4yNjYsMjcuMDE3LDQyNS4yNjYsMTkuNTM5LDQyMC42NTQsMTQuOTMxeiIgZmlsbD0iIzkxREM1QSIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=)'
    }, btnStyles),
    oddTableRowStyles: { backgroundColor: 'rgba(100,149,237, 0.1)' },
    headerStyle: Utils.mergeObjects({ textAlign: 'right', wordBreak: 'break-word' }, tableCellStyle),
    tableCellStyle: tableCellStyle,
    inputStyles: inputStyles,
    inputReadOnlyStyles: Utils.mergeObjects({ backgroundColor: 'gainsboro' }, inputStyles),

}

export let NewKeyValueItemStyles = {
    btnStylePlus: Utils.mergeObjects(btnStyles, {
        backgroundImage: 'url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMCA0MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMTk5Ljk5NSwwQzg5LjcxNiwwLDAsODkuNzIsMCwyMDBjMCwxMTAuMjc5LDg5LjcxNiwyMDAsMTk5Ljk5NSwyMDBDMzEwLjI3Nyw0MDAsNDAwLDMxMC4yNzksNDAwLDIwMCAgICBDNDAwLDg5LjcyLDMxMC4yNzcsMCwxOTkuOTk1LDB6IE0xOTkuOTk1LDM3My43N0MxMDQuMTgyLDM3My43NywyNi4yMywyOTUuODE2LDI2LjIzLDIwMGMwLTk1LjgxNyw3Ny45NTEtMTczLjc3LDE3My43NjUtMTczLjc3ICAgIGM5NS44MTcsMCwxNzMuNzcyLDc3Ljk1MywxNzMuNzcyLDE3My43N0MzNzMuNzY5LDI5NS44MTYsMjk1LjgxMiwzNzMuNzcsMTk5Ljk5NSwzNzMuNzd6IiBmaWxsPSIjOTFEQzVBIi8+CgkJPHBhdGggZD0iTTI3OS40NzgsMTg2Ljg4NGgtNjYuMzYzVjEyMC41MmMwLTcuMjQzLTUuODcyLTEzLjExNS0xMy4xMTUtMTMuMTE1cy0xMy4xMTUsNS44NzMtMTMuMTE1LDEzLjExNXY2Ni4zNjhoLTY2LjM2MSAgICBjLTcuMjQyLDAtMTMuMTE1LDUuODczLTEzLjExNSwxMy4xMTVjMCw3LjI0Myw1Ljg3MywxMy4xMTUsMTMuMTE1LDEzLjExNWg2Ni4zNTh2NjYuMzYyYzAsNy4yNDIsNS44NzIsMTMuMTE0LDEzLjExNSwxMy4xMTQgICAgYzcuMjQyLDAsMTMuMTE1LTUuODcyLDEzLjExNS0xMy4xMTR2LTY2LjM2NWg2Ni4zNjdjNy4yNDEsMCwxMy4xMTQtNS44NzMsMTMuMTE0LTEzLjExNSAgICBDMjkyLjU5MywxOTIuNzU3LDI4Ni43MiwxODYuODg0LDI3OS40NzgsMTg2Ljg4NHoiIGZpbGw9IiM5MURDNUEiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K)'
    }),
    divStyle: {
        display: 'inline-block',
        width: '44%',
        marginTop: '10px'
    },
    labelStyle: {
        display: 'block',
        fontWeight: 'bolder',
        marginBottom: '5px'
    },
    inputStyle: {
        width: '95%'
    }
}

export let MessageBarStyles = {
    span: {
        margin: 0,
        padding: 0
    },
    Error: Utils.mergeObjects({
        backgroundColor: 'rgba(255, 0, 0, 0.6)',
        border: '1px rgb(255, 0, 0,) solid'
    }, divContainer),
    Success: Utils.mergeObjects({
        backgroundColor: 'rgba(49, 149, 36, 0.6)',
        border: '1px rgb(49, 149, 36) solid'
    }, divContainer),
    Info: Utils.mergeObjects({
        backgroundColor: 'rgba(10, 117, 224, 0.6)',
        border: '1px rgb(10, 117, 224) solid'
    }, divContainer)
}

export let WorkingOnItStyles = {
    workingOnItContStyles: {
        overflow: 'auto',
        height: '90%',
        width: '100%',
        textAlign: 'center',
        verticalAlign: 'middle',
        marginTop: '6.5px'
    },
    workingOnItItemsStyles: {
        display: 'inline-block',
        verticalAlign: 'middle',
        margin: '20px'
    }
};

export let SpCustomModalWrapperStyles = {
    hidden: {
        display: 'none',
    },
    modalContainerDivStyles: {
        width: '100%',
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.5)',
        top: 0,
        bottom: 0,
        zIndex: 99991
    },
    divModalStyles: {
        background: 'white',
        width: '60%',
        height: '94%',
        margin: '10px auto',
        position: 'relative',
        padding: '10px',
        borderRadius: '5px'
    },
    linkBtnStyles: {
        top: 0,
        right: 0,
        position: 'absolute',
        height: '25px',
        width: '25px',
        backgroundColor: 'lightgrey',
        color: 'black',
        textAlign: 'center',
        verticalAlign: 'middle',
        fontSize: 'larger',
        borderRadius: '0 5px'
    }
}

export let SpSiteContentStyles: any = {
    contentStyles: contentStyles,
    list: listStyle,
    checksContainer: { textAlign: 'right', marginTop: '6.5px' },
    check: { display: 'inline-block', marginRight: '20px' },
    lastCheck: { display: 'inline-block' }

}

export let SpSiteContentItemStyles: any = {
    listItem: { width: '50%', display: 'inline-block' },
    divContainer: { padding: '10px', margin: '5px', backgroundColor: 'rgba(100,149,237, 0.1)', position: 'relative', borderRadius: '5px' },
    imageItem: { width: '16px', height: '16px', verticalAlign: 'middle' },
    itemTitle: { display: 'inline-block', width: '93%', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', verticalAlign: 'middle', marginLeft: '5px' },
    totalItems: { marginTop: '10px', marginBottom: '2px' },
    settingsStyles: {
        marginTop: '2px', marginBottom: '2px', position: 'absolute', right: '15px', bottom: '10px',
        paddingLeft: '27px', backgroundPosition: '10% 50%', backgroundRepeat: 'no-repeat', backgroundImage: 'url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3OC43MDMgNDc4LjcwMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc4LjcwMyA0NzguNzAzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTQ1NC4yLDE4OS4xMDFsLTMzLjYtNS43Yy0zLjUtMTEuMy04LTIyLjItMTMuNS0zMi42bDE5LjgtMjcuN2M4LjQtMTEuOCw3LjEtMjcuOS0zLjItMzguMWwtMjkuOC0yOS44ICAgIGMtNS42LTUuNi0xMy04LjctMjAuOS04LjdjLTYuMiwwLTEyLjEsMS45LTE3LjEsNS41bC0yNy44LDE5LjhjLTEwLjgtNS43LTIyLjEtMTAuNC0zMy44LTEzLjlsLTUuNi0zMy4yICAgIGMtMi40LTE0LjMtMTQuNy0yNC43LTI5LjItMjQuN2gtNDIuMWMtMTQuNSwwLTI2LjgsMTAuNC0yOS4yLDI0LjdsLTUuOCwzNGMtMTEuMiwzLjUtMjIuMSw4LjEtMzIuNSwxMy43bC0yNy41LTE5LjggICAgYy01LTMuNi0xMS01LjUtMTcuMi01LjVjLTcuOSwwLTE1LjQsMy4xLTIwLjksOC43bC0yOS45LDI5LjhjLTEwLjIsMTAuMi0xMS42LDI2LjMtMy4yLDM4LjFsMjAsMjguMSAgICBjLTUuNSwxMC41LTkuOSwyMS40LTEzLjMsMzIuN2wtMzMuMiw1LjZjLTE0LjMsMi40LTI0LjcsMTQuNy0yNC43LDI5LjJ2NDIuMWMwLDE0LjUsMTAuNCwyNi44LDI0LjcsMjkuMmwzNCw1LjggICAgYzMuNSwxMS4yLDguMSwyMi4xLDEzLjcsMzIuNWwtMTkuNywyNy40Yy04LjQsMTEuOC03LjEsMjcuOSwzLjIsMzguMWwyOS44LDI5LjhjNS42LDUuNiwxMyw4LjcsMjAuOSw4LjdjNi4yLDAsMTIuMS0xLjksMTcuMS01LjUgICAgbDI4LjEtMjBjMTAuMSw1LjMsMjAuNyw5LjYsMzEuNiwxM2w1LjYsMzMuNmMyLjQsMTQuMywxNC43LDI0LjcsMjkuMiwyNC43aDQyLjJjMTQuNSwwLDI2LjgtMTAuNCwyOS4yLTI0LjdsNS43LTMzLjYgICAgYzExLjMtMy41LDIyLjItOCwzMi42LTEzLjVsMjcuNywxOS44YzUsMy42LDExLDUuNSwxNy4yLDUuNWwwLDBjNy45LDAsMTUuMy0zLjEsMjAuOS04LjdsMjkuOC0yOS44YzEwLjItMTAuMiwxMS42LTI2LjMsMy4yLTM4LjEgICAgbC0xOS44LTI3LjhjNS41LTEwLjUsMTAuMS0yMS40LDEzLjUtMzIuNmwzMy42LTUuNmMxNC4zLTIuNCwyNC43LTE0LjcsMjQuNy0yOS4ydi00Mi4xICAgIEM0NzguOSwyMDMuODAxLDQ2OC41LDE5MS41MDEsNDU0LjIsMTg5LjEwMXogTTQ1MS45LDI2MC40MDFjMCwxLjMtMC45LDIuNC0yLjIsMi42bC00Miw3Yy01LjMsMC45LTkuNSw0LjgtMTAuOCw5LjkgICAgYy0zLjgsMTQuNy05LjYsMjguOC0xNy40LDQxLjljLTIuNyw0LjYtMi41LDEwLjMsMC42LDE0LjdsMjQuNywzNC44YzAuNywxLDAuNiwyLjUtMC4zLDMuNGwtMjkuOCwyOS44Yy0wLjcsMC43LTEuNCwwLjgtMS45LDAuOCAgICBjLTAuNiwwLTEuMS0wLjItMS41LTAuNWwtMzQuNy0yNC43Yy00LjMtMy4xLTEwLjEtMy4zLTE0LjctMC42Yy0xMy4xLDcuOC0yNy4yLDEzLjYtNDEuOSwxNy40Yy01LjIsMS4zLTkuMSw1LjYtOS45LDEwLjhsLTcuMSw0MiAgICBjLTAuMiwxLjMtMS4zLDIuMi0yLjYsMi4yaC00Mi4xYy0xLjMsMC0yLjQtMC45LTIuNi0yLjJsLTctNDJjLTAuOS01LjMtNC44LTkuNS05LjktMTAuOGMtMTQuMy0zLjctMjguMS05LjQtNDEtMTYuOCAgICBjLTIuMS0xLjItNC41LTEuOC02LjgtMS44Yy0yLjcsMC01LjUsMC44LTcuOCwyLjVsLTM1LDI0LjljLTAuNSwwLjMtMSwwLjUtMS41LDAuNWMtMC40LDAtMS4yLTAuMS0xLjktMC44bC0yOS44LTI5LjggICAgYy0wLjktMC45LTEtMi4zLTAuMy0zLjRsMjQuNi0zNC41YzMuMS00LjQsMy4zLTEwLjIsMC42LTE0LjhjLTcuOC0xMy0xMy44LTI3LjEtMTcuNi00MS44Yy0xLjQtNS4xLTUuNi05LTEwLjgtOS45bC00Mi4zLTcuMiAgICBjLTEuMy0wLjItMi4yLTEuMy0yLjItMi42di00Mi4xYzAtMS4zLDAuOS0yLjQsMi4yLTIuNmw0MS43LTdjNS4zLTAuOSw5LjYtNC44LDEwLjktMTBjMy43LTE0LjcsOS40LTI4LjksMTcuMS00MiAgICBjMi43LTQuNiwyLjQtMTAuMy0wLjctMTQuNmwtMjQuOS0zNWMtMC43LTEtMC42LTIuNSwwLjMtMy40bDI5LjgtMjkuOGMwLjctMC43LDEuNC0wLjgsMS45LTAuOGMwLjYsMCwxLjEsMC4yLDEuNSwwLjVsMzQuNSwyNC42ICAgIGM0LjQsMy4xLDEwLjIsMy4zLDE0LjgsMC42YzEzLTcuOCwyNy4xLTEzLjgsNDEuOC0xNy42YzUuMS0xLjQsOS01LjYsOS45LTEwLjhsNy4yLTQyLjNjMC4yLTEuMywxLjMtMi4yLDIuNi0yLjJoNDIuMSAgICBjMS4zLDAsMi40LDAuOSwyLjYsMi4ybDcsNDEuN2MwLjksNS4zLDQuOCw5LjYsMTAsMTAuOWMxNS4xLDMuOCwyOS41LDkuNyw0Mi45LDE3LjZjNC42LDIuNywxMC4zLDIuNSwxNC43LTAuNmwzNC41LTI0LjggICAgYzAuNS0wLjMsMS0wLjUsMS41LTAuNWMwLjQsMCwxLjIsMC4xLDEuOSwwLjhsMjkuOCwyOS44YzAuOSwwLjksMSwyLjMsMC4zLDMuNGwtMjQuNywzNC43Yy0zLjEsNC4zLTMuMywxMC4xLTAuNiwxNC43ICAgIGM3LjgsMTMuMSwxMy42LDI3LjIsMTcuNCw0MS45YzEuMyw1LjIsNS42LDkuMSwxMC44LDkuOWw0Miw3LjFjMS4zLDAuMiwyLjIsMS4zLDIuMiwyLjZ2NDIuMUg0NTEuOXoiIGZpbGw9IiMwMDAwMDAiLz4KCQk8cGF0aCBkPSJNMjM5LjQsMTM2LjAwMWMtNTcsMC0xMDMuMyw0Ni4zLTEwMy4zLDEwMy4zczQ2LjMsMTAzLjMsMTAzLjMsMTAzLjNzMTAzLjMtNDYuMywxMDMuMy0xMDMuM1MyOTYuNCwxMzYuMDAxLDIzOS40LDEzNi4wMDEgICAgeiBNMjM5LjQsMzE1LjYwMWMtNDIuMSwwLTc2LjMtMzQuMi03Ni4zLTc2LjNzMzQuMi03Ni4zLDc2LjMtNzYuM3M3Ni4zLDM0LjIsNzYuMyw3Ni4zUzI4MS41LDMxNS42MDEsMjM5LjQsMzE1LjYwMXoiIGZpbGw9IiMwMDAwMDAiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K)'
    }
}

export let SpCustomActionsStyles : any ={
    contentStyles: contentStyles,
    list: listStyle
}