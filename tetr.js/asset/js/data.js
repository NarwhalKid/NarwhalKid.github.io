/**
 * Piece data
 */

// [r][x][y]
var TetroI = [
  [[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0]],
  [[0,0,0,0],[0,0,0,0],[1,1,1,1],[0,0,0,0]],
  [[0,0,1,0],[0,0,1,0],[0,0,1,0],[0,0,1,0]],
  [[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]]];
var TetroJ = [
  [[2,2,0,0],[0,2,0,0],[0,2,0,0],[0,0,0,0]],
  [[0,0,0,0],[2,2,2,0],[2,0,0,0],[0,0,0,0]],
  [[0,2,0,0],[0,2,0,0],[0,2,2,0],[0,0,0,0]],
  [[0,0,2,0],[2,2,2,0],[0,0,0,0],[0,0,0,0]]];
var TetroL = [
  [[0,3,0,0],[0,3,0,0],[3,3,0,0],[0,0,0,0]],
  [[0,0,0,0],[3,3,3,0],[0,0,3,0],[0,0,0,0]],
  [[0,3,3,0],[0,3,0,0],[0,3,0,0],[0,0,0,0]],
  [[3,0,0,0],[3,3,3,0],[0,0,0,0],[0,0,0,0]]];
var TetroO = [
  [[0,0,0,0],[4,4,0,0],[4,4,0,0],[0,0,0,0]],
  [[0,0,0,0],[4,4,0,0],[4,4,0,0],[0,0,0,0]],
  [[0,0,0,0],[4,4,0,0],[4,4,0,0],[0,0,0,0]],
  [[0,0,0,0],[4,4,0,0],[4,4,0,0],[0,0,0,0]]];
var TetroS = [
  [[0,5,0,0],[5,5,0,0],[5,0,0,0],[0,0,0,0]],
  [[0,0,0,0],[5,5,0,0],[0,5,5,0],[0,0,0,0]],
  [[0,0,5,0],[0,5,5,0],[0,5,0,0],[0,0,0,0]],
  [[5,5,0,0],[0,5,5,0],[0,0,0,0],[0,0,0,0]]];
var TetroT = [
  [[0,6,0,0],[6,6,0,0],[0,6,0,0],[0,0,0,0]],
  [[0,0,0,0],[6,6,6,0],[0,6,0,0],[0,0,0,0]],
  [[0,6,0,0],[0,6,6,0],[0,6,0,0],[0,0,0,0]],
  [[0,6,0,0],[6,6,6,0],[0,0,0,0],[0,0,0,0]]];
var TetroZ = [
  [[7,0,0,0],[7,7,0,0],[0,7,0,0],[0,0,0,0]],
  [[0,0,0,0],[0,7,7,0],[7,7,0,0],[0,0,0,0]],
  [[0,7,0,0],[0,7,7,0],[0,0,7,0],[0,0,0,0]],
  [[0,7,7,0],[7,7,0,0],[0,0,0,0],[0,0,0,0]]];
// [r][MINX MINY MAXX MAXY]
var RectI = [[0,1,4,2],[2,0,3,4],[0,2,4,3],[1,0,2,4]];
var RectJ = [[0,0,3,2],[1,0,3,3],[0,1,3,3],[0,0,2,3]];
var RectL = [[0,0,3,2],[1,0,3,3],[0,1,3,3],[0,0,2,3]];
var RectO = [[1,0,3,2],[1,0,3,2],[1,0,3,2],[1,0,3,2]];
var RectS = [[0,0,3,2],[1,0,3,3],[0,1,3,3],[0,0,2,3]];
var RectT = [[0,0,3,2],[1,0,3,3],[0,1,3,3],[0,0,2,3]];
var RectZ = [[0,0,3,2],[1,0,3,3],[0,1,3,3],[0,0,2,3]];

var WKTableSRSI_R = [
  [[ 0, 0],[-2, 0],[+1, 0],[-2,+1],[+1,-2]],
  [[ 0, 0],[-1, 0],[+2, 0],[-1,-2],[+2,+1]],
  [[ 0, 0],[+2, 0],[-1, 0],[+2,-1],[-1,+2]],
  [[ 0, 0],[+1, 0],[-2, 0],[+1,+2],[-2,-1]]];
var WKTableSRSI_L = [
  [[ 0, 0],[-1, 0],[+2, 0],[-1,-2],[+2,+1]],
  [[ 0, 0],[+2, 0],[-1, 0],[+2,-1],[-1,+2]],
  [[ 0, 0],[+1, 0],[-2, 0],[+1,+2],[-2,-1]],
  [[ 0, 0],[-2, 0],[+1, 0],[-2,+1],[+1,-2]]];
var WKTableSRSI_2 = [
  [[ 0, 0],[-1, 0],[-2, 0],[+1, 0],[+2, 0],[ 0,+1]],
  [[ 0, 0],[ 0,+1],[ 0,+2],[ 0,-1],[ 0,-2],[-1, 0]],
  [[ 0, 0],[+1, 0],[+2, 0],[-1, 0],[-2, 0],[ 0,-1]],
  [[ 0, 0],[ 0,+1],[ 0,+2],[ 0,-1],[ 0,-2],[+1, 0]]];
var WKTableSRSX_R = [
  [[ 0, 0],[-1, 0],[-1,-1],[ 0,+2],[-1,+2]],
  [[ 0, 0],[+1, 0],[+1,+1],[ 0,-2],[+1,-2]],
  [[ 0, 0],[+1, 0],[+1,-1],[ 0,+2],[+1,+2]],
  [[ 0, 0],[-1, 0],[-1,+1],[ 0,-2],[-1,-2]]];
var WKTableSRSX_L = [
  [[ 0, 0],[+1, 0],[+1,-1],[ 0,+2],[+1,+2]],
  [[ 0, 0],[+1, 0],[+1,+1],[ 0,-2],[+1,-2]],
  [[ 0, 0],[-1, 0],[-1,-1],[ 0,+2],[-1,+2]],
  [[ 0, 0],[-1, 0],[-1,+1],[ 0,-2],[-1,-2]]];
var WKTableSRSX_2 = [
  [[ 0, 0],[+1, 0],[+2, 0],[+1,+1],[+2,+1],[-1, 0],[-2, 0],[-1,+1],[-2,+1],[ 0,-1],[+3, 0],[-3, 0]],
  [[ 0, 0],[ 0,+1],[ 0,+2],[-1,+1],[-1,+2],[ 0,-1],[ 0,-2],[-1,-1],[-1,-2],[+1, 0],[ 0,+3],[ 0,-3]],
  [[ 0, 0],[-1, 0],[-2, 0],[-1,-1],[-2,-1],[+1, 0],[+2, 0],[+1,-1],[+2,-1],[ 0,+1],[-3, 0],[+3, 0]],
  [[ 0, 0],[ 0,+1],[ 0,+2],[+1,+1],[+1,+2],[ 0,-1],[ 0,-2],[+1,-1],[+1,-2],[-1, 0],[ 0,+3],[ 0,-3]]];
var WKTableSRSI = [WKTableSRSI_R,WKTableSRSI_L,WKTableSRSI_2];
var WKTableSRSX = [WKTableSRSX_R,WKTableSRSX_L,WKTableSRSX_2];
var WKTableSRS = [WKTableSRSI,WKTableSRSX,WKTableSRSX,WKTableSRSX,WKTableSRSX,WKTableSRSX,WKTableSRSX];

var WKTableCultris = [[ 0, 0],[-1, 0],[+1, 0],[ 0,+1],[-1,+1],[+1,+1],[-2, 0],[+2, 0],[ 0,-1]];

var WKTableDTET_R = [[ 0, 0],[+1, 0],[-1, 0],[ 0,+1],[+1,+1],[-1,+1],[ 0,-1]];
var WKTableDTET_L = [[ 0, 0],[-1, 0],[+1, 0],[ 0,+1],[-1,+1],[+1,+1],[ 0,-1]];
var WKTableDTET = [WKTableDTET_R,WKTableDTET_L,WKTableDTET_L];

var WKTableDX_R = [[[0, 0], [-1, -1]], [[0, 0], [+1, -1]], [[0, 0], [+1, +1]], [[0, 0], [-1, +1]]];
var WKTableDX_L = [[[0, 0], [+1, -1]], [[0, 0], [+1, +1]], [[0, 0], [-1, +1]], [[0, 0], [-1, -1]]];
var WKTableDX_2 = [[[0, 0], [ 0, -2]], [[0, 0], [-2,  0]], [[0, 0], [ 0, +2]], [[0, 0], [+2,  0]]];
var WKTableDX = [WKTableDX_R,WKTableDX_L,WKTableDX_2];

var OffsetSRS = [
  [[ 0, 0],[ 0, 0],[ 0, 0],[ 0, 0]],
  [[ 0, 0],[ 0, 0],[ 0, 0],[ 0, 0]],
  [[ 0, 0],[ 0, 0],[ 0, 0],[ 0, 0]],
  [[ 0, 0],[ 0, 0],[ 0, 0],[ 0, 0]],
  [[ 0, 0],[ 0, 0],[ 0, 0],[ 0, 0]],
  [[ 0, 0],[ 0, 0],[ 0, 0],[ 0, 0]],
  [[ 0, 0],[ 0, 0],[ 0, 0],[ 0, 0]]];
var OffsetARS = [
  [[ 0, 0],[ 0, 0],[ 0,-1],[+1, 0]],
  [[ 0,+1],[ 0, 0],[ 0, 0],[ 0, 0]],
  [[ 0,+1],[ 0, 0],[ 0, 0],[ 0, 0]],
  [[ 0,+1],[ 0,+1],[ 0,+1],[ 0,+1]],
  [[ 0,+1],[-1, 0],[ 0, 0],[ 0, 0]],
  [[ 0,+1],[ 0, 0],[ 0, 0],[ 0, 0]],
  [[ 0,+1],[ 0, 0],[ 0, 0],[+1, 0]]];
var OffsetDTET = [
  [[ 0,+1],[ 0, 0],[ 0, 0],[ 0, 0]],
  [[ 0,+2],[ 0,+1],[ 0,+1],[ 0,+1]],
  [[ 0,+2],[ 0,+1],[ 0,+1],[ 0,+1]],
  [[ 0,+2],[ 0,+2],[ 0,+2],[ 0,+2]],
  [[ 0,+2],[ 0,+1],[ 0,+1],[ 0,+1]],
  [[ 0,+2],[ 0,+1],[ 0,+1],[ 0,+1]],
  [[ 0,+2],[ 0,+1],[ 0,+1],[ 0,+1]]];
var OffsetQQ = [
  [[ 0, 0],[ 0, 0],[ 0,-1],[+1, 0]],
  [[ 0, 0],[ 0, 0],[ 0, 0],[ 0, 0]],
  [[ 0, 0],[ 0, 0],[ 0, 0],[ 0, 0]],
  [[ 0, 0],[ 0, 0],[ 0, 0],[ 0, 0]],
  [[ 0, 0],[ 0, 0],[ 0,-1],[+1, 0]],
  [[ 0, 0],[ 0, 0],[ 0, 0],[ 0, 0]],
  [[ 0, 0],[ 0, 0],[ 0,-1],[+1, 0]]];
var OffsetAtari = [
  [[ 0,-1],[-1, 0],[ 0,-2],[ 0, 0]],
  [[ 0, 0],[-1, 0],[ 0,-1],[ 0, 0]],
  [[ 0, 0],[-1, 0],[ 0,-1],[ 0, 0]],
  [[-1, 0],[-1, 0],[-1, 0],[-1, 0]],
  [[ 0, 0],[-1, 0],[ 0,-1],[ 0, 0]],
  [[ 0, 0],[-1, 0],[ 0,-1],[ 0, 0]],
  [[ 0, 0],[-1, 0],[ 0,-1],[ 0, 0]]];
var OffsetNBlox = [
  [[ 0, 0],[-1, 0],[ 0,-1],[ 0, 0]],
  [[ 0, 0],[ 0, 0],[ 0, 0],[ 0, 0]],
  [[ 0, 0],[ 0, 0],[ 0, 0],[ 0, 0]],
  [[ 0,+1],[ 0,+1],[ 0,+1],[ 0,+1]],
  [[ 0,+1],[ 0, 0],[ 0, 0],[+1, 0]],
  [[ 0, 0],[ 0, 0],[ 0, 0],[ 0, 0]],
  [[ 0,+1],[ 0, 0],[ 0, 0],[+1, 0]]];
var OffsetNintendo = [
  [[ 0,+1],[ 0, 0],[ 0, 0],[+1, 0]],
  [[+1,+1],[+1,+1],[+1,+1],[+1,+1]],
  [[+1,+1],[+1,+1],[+1,+1],[+1,+1]],
  [[ 0,+2],[ 0,+2],[ 0,+2],[ 0,+2]],
  [[+1,+2],[+1,+1],[+1,+1],[+2,+1]],
  [[+1,+1],[+1,+1],[+1,+1],[+1,+1]],
  [[+1,+2],[+1,+1],[+1,+1],[+2,+1]]];
var OffsetMS = [
  [[ 0, 0],[ 0, 0],[ 0,-1],[+1, 0]],
  [[+1, 0],[+1, 0],[+1, 0],[+1, 0]],
  [[+1, 0],[+1, 0],[+1, 0],[+1, 0]],
  [[ 0,+1],[ 0,+1],[ 0,+1],[ 0,+1]],
  [[+1,+1],[ 0,+1],[+1, 0],[+1,+1]],
  [[+1, 0],[+1, 0],[+1, 0],[+1, 0]],
  [[+1,+1],[ 0,+1],[+1, 0],[+1,+1]]];
var OffsetE60 = [
  [[ 0, 0],[ 0, 0],[ 0,-1],[+1, 0]],
  [[+1, 0],[+1, 0],[+1, 0],[+1, 0]],
  [[+1, 0],[+1, 0],[+1, 0],[+1, 0]],
  [[ 0,+1],[ 0,+1],[ 0,+1],[ 0,+1]],
  [[+1,+1],[+1, 0],[+1, 0],[+2, 0]],
  [[+1, 0],[+1, 0],[+1, 0],[+1, 0]],
  [[+1,+1],[+1, 0],[+1, 0],[+2, 0]]];
var OffsetJJSRS = [
  [[ 0, 0],[ 0, 0],[ 0, 0],[ 0, 0]],
  [[+1, 0],[+1, 0],[+1, 0],[+1, 0]],
  [[+1, 0],[+1, 0],[+1, 0],[+1, 0]],
  [[ 0, 0],[ 0, 0],[ 0, 0],[ 0, 0]],
  [[+1, 0],[+1, 0],[+1, 0],[+1, 0]],
  [[+1, 0],[+1, 0],[+1, 0],[+1, 0]],
  [[+1, 0],[+1, 0],[+1, 0],[+1, 0]]];
var Offset5000 = [
  [[ 0,+1],[-1, 0],[ 0, 0],[ 0, 0]],
  [[ 0, 0],[ 0, 0],[ 0, 0],[ 0, 0]],
  [[ 0,+1],[ 0,+1],[ 0,+1],[ 0,+1]],
  [[ 0, 0],[ 0, 0],[ 0, 0],[ 0, 0]],
  [[ 0, 0],[ 0, 0],[ 0,-1],[+1, 0]],
  [[ 0,+1],[-1, 0],[ 0,-1],[+1, 0]],
  [[ 0, 0],[ 0, 0],[ 0,-1],[+1, 0]]];
var OffsetPlus = [
  [[ 0, 0],[ 0, 0],[ 0,-1],[+1, 0]],
  [[+1,+1],[+1, 0],[+1, 0],[+1, 0]],
  [[+1,+1],[+1, 0],[+1, 0],[+1, 0]],
  [[ 0,+1],[ 0,+1],[ 0,+1],[ 0,+1]],
  [[+1,+1],[ 0, 0],[+1, 0],[+1, 0]],
  [[+1,+1],[+1, 0],[+1, 0],[+1, 0]],
  [[+1,+1],[+1, 0],[+1, 0],[+2, 0]]];
var OffsetDX = [
  [[ 0, 0],[ 0, 0],[ 0, 0],[ 0, 0]],
  [[ 0, 0],[ 0, 0],[ 0, 0],[ 0, 0]],
  [[ 0, 0],[ 0, 0],[ 0, 0],[ 0, 0]],
  [[ 0, 0],[ 0, 0],[ 0, 0],[ 0, 0]],
  [[ 0,+1],[ 0,+1],[ 0,+1],[ 0,+1]],
  [[ 0, 0],[ 0, 0],[ 0, 0],[ 0, 0]],
  [[ 0,+1],[ 0,+1],[ 0,+1],[ 0,+1]]];
var OffsetNintendoL = [
  [[ 0,+1],[-1, 0],[ 0, 0],[ 0, 0]],
  [[ 0,+1],[ 0,+1],[ 0,+1],[ 0,+1]],
  [[ 0,+1],[ 0,+1],[ 0,+1],[ 0,+1]],
  [[ 0,+1],[ 0,+1],[ 0,+1],[ 0,+1]],
  [[ 0,+2],[-1,+1],[ 0,+1],[ 0,+1]],
  [[ 0,+1],[ 0,+1],[ 0,+1],[ 0,+1]],
  [[ 0,+2],[-1,+1],[ 0,+1],[ 0,+1]]];
var OffsetQuadra = [
  [[ 0, 0],[-1, 0],[ 0,-1],[ 0, 0]],
  [[ 0, 0],[ 0, 0],[ 0, 0],[ 0, 0]],
  [[ 0, 0],[ 0, 0],[ 0, 0],[ 0, 0]],
  [[ 0,+1],[ 0,+1],[ 0,+1],[ 0,+1]],
  [[ 0,+1],[-1, 0],[ 0, 0],[ 0, 0]],
  [[ 0, 0],[ 0, 0],[ 0, 0],[ 0, 0]],
  [[ 0,+1],[-1, 0],[ 0, 0],[ 0, 0]]];
var OffsetMybo = [
  [[ 0,+2],[-1, 0],[ 0,+1],[ 0, 0]],
  [[+1,+2],[ 0,+1],[+1,+1],[+1,+1]],
  [[+1,+2],[ 0,+1],[+1,+1],[+1,+1]],
  [[ 0,+2],[ 0,+2],[ 0,+2],[ 0,+2]],
  [[+1,+2],[+1,+1],[+1,+1],[+2,+1]],
  [[+1,+2],[+1,+1],[+1,+1],[+1,+1]],
  [[+1,+2],[+1,+1],[+1,+1],[+2,+1]]];
var OffsetTNET = [
  [[ 0,-1],[ 0, 0],[ 0,-2],[+1, 0]],
  [[+1, 0],[ 0, 0],[+1,-1],[+1, 0]],
  [[+1, 0],[ 0, 0],[+1,-1],[+1, 0]],
  [[ 0, 0],[ 0, 0],[ 0, 0],[ 0, 0]],
  [[+1, 0],[ 0, 0],[+1,-1],[+1, 0]],
  [[+1, 0],[ 0, 0],[+1,-1],[+1, 0]],
  [[+1, 0],[ 0, 0],[+1,-1],[+1, 0]]];
var OffsetCDi = [
  [[ 0, 0],[ 0, 0],[ 0,-1],[+1, 0]],
  [[ 0,+1],[ 0, 0],[ 0, 0],[ 0, 0]],
  [[ 0,+1],[ 0, 0],[ 0, 0],[+1, 0]],
  [[-1,+1],[-1,+1],[-1,+1],[-1,+1]],
  [[ 0,+1],[ 0, 0],[ 0, 0],[+1, 0]],
  [[ 0,+1],[ 0, 0],[ 0, 0],[ 0, 0]],
  [[ 0,+1],[ 0, 0],[ 0, 0],[+1, 0]]];
var OffsetSHC = [
  [[ 0, 0],[ 0, 0],[ 0,-1],[+1, 0]],
  [[ 0,+1],[ 0, 0],[ 0, 0],[ 0, 0]],
  [[ 0,+1],[ 0, 0],[ 0, 0],[ 0, 0]],
  [[ 0,+1],[ 0,+1],[ 0,+1],[ 0,+1]],
  [[ 0,+1],[ 0, 0],[ 0, 0],[+1, 0]],
  [[ 0,+1],[ 0, 0],[ 0, 0],[ 0, 0]],
  [[ 0,+1],[ 0, 0],[ 0, 0],[+1, 0]]];
var OffsetMax = [
  [[ 0, 0],[ 0, 0],[ 0, 0],[ 0, 0]],
  [[+1, 0],[+1, 0],[+1, 0],[+1, 0]],
  [[+1, 0],[+1, 0],[+1, 0],[+1, 0]],
  [[ 0, 0],[ 0, 0],[ 0, 0],[ 0, 0]],
  [[+1, 0],[+1, 0],[+1, 0],[+1, 0]],
  [[+1, 0],[+1, 0],[+1, 0],[+1, 0]],
  [[+1, 0],[+1, 0],[+1, 0],[+1, 0]]];
var OffsetIntelore = [
  [[ 0, 0],[ 0, 0],[ 0, 0],[ 0, 0]],
  [[ 0,+1],[ 0, 0],[+1, 0],[+1,+1]],
  [[+1,+1],[ 0,+1],[ 0, 0],[+1, 0]],
  [[ 0,+1],[ 0,+1],[ 0,+1],[ 0,+1]],
  [[ 0,+1],[ 0, 0],[+1, 0],[+1,+1]],
  [[ 0,+1],[ 0, 0],[+1, 0],[+1,+1]],
  [[ 0,+1],[ 0, 0],[+1, 0],[+1,+1]]];
var OffsetZen= [
  [[ 0, 0],[-1, 0],[ 0,-1],[ 0, 0]],
  [[ 0,+2],[ 0,+1],[ 0,+1],[+1,+1]],
  [[ 0,+2],[ 0,+1],[ 0,+1],[+1,+1]],
  [[ 0,+2],[ 0,+2],[ 0,+2],[ 0,+2]],
  [[ 0,+2],[ 0,+1],[ 0,+1],[+1,+1]],
  [[ 0,+2],[ 0,+1],[ 0,+1],[+1,+1]],
  [[ 0,+2],[ 0,+1],[ 0,+1],[+1,+1]]];
var OffsetTris = [
  [[ 0, 0],[ 0, 0],[ 0, 0],[ 0, 0]],
  [[+1,+1],[ 0,+1],[ 0, 0],[+1, 0]],
  [[ 0,+1],[ 0, 0],[+1, 0],[+1,+1]],
  [[ 0,+1],[ 0,+1],[ 0,+1],[ 0,+1]],
  [[ 0,+1],[ 0, 0],[+1, 0],[+1,+1]],
  [[ 0,+1],[ 0, 0],[+1, 0],[+1,+1]],
  [[ 0,+1],[ 0, 0],[+1, 0],[+1,+1]]];
var OffsetBPS = [
  [[ 0,+1],[-1, 0],[ 0, 0],[ 0, 0]],
  [[ 0,+1],[ 0,+1],[ 0,+1],[ 0,+1]],
  [[ 0,+1],[ 0,+1],[ 0,+1],[ 0,+1]],
  [[ 0,+1],[ 0,+1],[ 0,+1],[ 0,+1]],
  [[+1,+1],[+1, 0],[+1, 0],[+2, 0]],
  [[ 0,+1],[ 0,+1],[ 0,+1],[ 0,+1]],
  [[+1,+1],[+1, 0],[+1, 0],[+2, 0]]];
var OffsetAcid = [
  [[ 0,+1],[ 0, 0],[ 0, 0],[+1, 0]],
  [[+1,+1],[+1,+1],[+1,+1],[+1,+1]],
  [[+1,+1],[+1,+1],[+1,+1],[+1,+1]],
  [[+1,+2],[+1,+2],[+1,+2],[+1,+2]],
  [[+1,+2],[+1,+1],[+1,+1],[+2,+1]],
  [[+1,+1],[+1,+1],[+1,+1],[+1,+1]],
  [[+1,+2],[+1,+1],[+1,+1],[+2,+1]]];
var OffsetCrazyYXWD = [
  [[ 0, 0],[ 0, 0],[ 0,-1],[+1, 0]],
  [[ 0, 0],[ 0, 0],[ 0, 0],[ 0, 0]],
  [[ 0, 0],[ 0, 0],[ 0, 0],[ 0, 0]],
  [[ 0, 0],[ 0, 0],[ 0, 0],[ 0, 0]],
  [[ 0, 0],[-1, 0],[ 0,-1],[ 0, 0]],
  [[ 0, 0],[ 0, 0],[ 0, 0],[ 0, 0]],
  [[ 0, 0],[-1, 0],[ 0,-1],[ 0, 0]]];
var OffsetTrukaMy = [
  [[ 0, 0],[-1, 0],[ 0,-1],[ 0, 0]],
  [[ 0, 0],[-1, 0],[ 0,-1],[ 0, 0]],
  [[ 0, 0],[-1, 0],[ 0,-1],[ 0, 0]],
  [[ 0, 0],[ 0, 0],[ 0, 0],[ 0, 0]],
  [[+1, 0],[+1, 0],[+1,-1],[+2, 0]],
  [[+1, 0],[+1, 0],[+1, 0],[+1, 0]],
  [[+1, 0],[ 0, 0],[+1,-1],[+1, 0]]];
var OffsetTwin = [
  [[ 0, 0],[-1, 0],[ 0,-1],[ 0, 0]],
  [[+1,+1],[ 0,+1],[ 0, 0],[+1, 0]],
  [[ 0,+1],[ 0, 0],[+1, 0],[+1,+1]],
  [[ 0,+1],[ 0,+1],[ 0,+1],[ 0,+1]],
  [[+1,+1],[ 0,+1],[+1, 0],[+1,+1]],
  [[+1, 0],[+1, 0],[+1, 0],[+1, 0]],
  [[+1,+1],[ 0,+1],[+1, 0],[+1,+1]]];
var OffsetFun = [
  [[ 0, 0],[ 0, 0],[ 0,-1],[+1, 0]],
  [[ 0,+1],[ 0,+1],[ 0,+1],[ 0,+1]],
  [[ 0,+1],[ 0,+1],[ 0,+1],[ 0,+1]],
  [[+1, 0],[+1, 0],[+1, 0],[+1, 0]],
  [[+1, 0],[ 0, 0],[+1,-1],[+1, 0]],
  [[+1, 0],[+1, 0],[+1, 0],[+1, 0]],
  [[+1, 0],[ 0, 0],[+1,-1],[+1, 0]]];
//x, y, r
var InitInfoSRS = [[ 0, 0, 0],[ 0, 0, 0],[ 0, 0, 0],[ 0, 0, 0],[ 0, 0, 0],[ 0, 0, 0],[ 0, 0, 0]];
var InitInfoARS = [[ 0, 0, 0],[ 0, 0, 2],[ 0, 0, 2],[ 0,+1, 0],[ 0,+1, 0],[ 0, 0, 2],[ 0,+1, 0]];
var InitInfoDTET = [[ 0, 0, 0],[ 0, 0, 2],[ 0, 0, 2],[ 0,+1, 0],[ 0,+1, 0],[ 0, 0, 2],[ 0,+1, 0]];
var InitInfoQQ = [[ 0, 0, 0],[ 0, 0, 1],[ 0, 0, 3],[ 0, 0, 0],[ 0, 0, 0],[ 0, 0, 2],[ 0, 0, 0]];
var InitInfoAtari = [[+1, 0, 0],[+1, 0, 2],[+1, 0, 2],[ 0,+1, 0],[+1,+1, 0],[+1, 0, 2],[+1,+1, 0]];
var InitInfoNBlox = [[ 0, 0, 0],[ 0, 0, 2],[ 0, 0, 2],[ 0,+1, 0],[ 0,+1, 0],[ 0, 0, 2],[ 0,+1, 0]];
var InitInfoNintendo = [[ 0, 0, 0],[+1, 0, 2],[+1, 0, 2],[ 0,+1, 0],[+1,+1, 0],[+1, 0, 2],[+1,+1, 0]];
var InitInfoMS = [[ 0, 0, 0],[+1, 0, 2],[+1, 0, 2],[ 0,+1, 0],[+1,+1, 0],[+1, 0, 2],[+1,+1, 0]];
var InitInfoE60 = [[ 0, 0, 0],[+1, 0, 2],[+1, 0, 2],[ 0,+1, 0],[+1,+1, 0],[+1, 0, 2],[+1,+1, 0]];
var InitInfoJJSRS = [[ 0, 0, 0],[+1, 0, 0],[+1, 0, 0],[ 0, 0, 0],[+1, 0, 0],[+1, 0, 0],[+1, 0, 0]];
var InitInfo5000 = [[ 0, 0, 3],[ 0, 0, 1],[+1, 0, 3],[ 0, 0, 0],[ 0, 0, 0],[ 0, -1, 2],[ 0, 0, 0]];
var InitInfoPlus = [[ 0, 0, 0],[+1, 0, 2],[+1, 0, 2],[ 0,+1, 0],[+1,+1, 0],[+1, 0, 2],[+1,+1, 0]];
var InitInfoSHC = [[+1,+1, 0],[+1, 0, 2],[+1, 0, 2],[ 0,+1, 0],[+1,+1, 0],[+1, 0, 2],[+1,+1, 0]];
var InitInfoDX = [[ 0, 0, 0],[ 0, 0, 2],[ 0, 0, 2],[ 0,+1, 0],[ 0,+1, 0],[ 0, 0, 2],[ 0,+1, 0]];
var InitInfoNintendoL = [[ 0, 0, 0],[ 0, 0, 2],[ 0, 0, 2],[ 0,+1, 0],[ 0,+1, 0],[ 0, 0, 2],[ 0,+1, 0]];
var InitInfoQuadra = [[ 0, 0, 0],[ 0, 0, 2],[ 0, 0, 2],[ 0,+1, 0],[ 0,+1, 0],[ 0, 0, 2],[ 0,+1, 0]];
var InitInfoMybo = [[ 0,+1, 0],[+1, 0, 2],[+1, 0, 2],[ 0,+1, 0],[+1,+1, 0],[+1, 0, 2],[+1,+1, 0]];
var InitInfoTNET = [[ 0, 0, 0],[+1, 0, 2],[+1, 0, 2],[ 0,+1, 0],[+1,+1, 0],[+1, 0, 2],[+1,+1, 0]];
var InitInfoCDi = [[+1, 0, 0],[+1, 0, 2],[+1, 0, 2],[ 0,+1, 0],[+1,+1, 0],[+1, 0, 2],[+1,+1, 0]];
var InitInfoMax = [[ 0, 0, 3],[+1, 0, 3],[+1, 0, 1],[ 0,+1, 0],[+1, 0, 3],[+1, 0, 2],[+1, 0, 3]];
var InitInfoIntelore = [[ 0, 0, 0],[ 0, 0, 1],[+1, 0, 3],[ 0,+1, 0],[ 0, 0, 1],[ 0, 0, 1],[ 0, 0, 1]];
var InitInfoZen = [[ 0,-1, 3],[+1, 0, 3],[ 0, 0, 1],[ 0,+1, 0],[ 0, 0, 1],[ 0, 0, 2],[ 0, 0, 1]];
var InitInfoTris = [[ 0, 0, 3],[+1, 0, 3],[ 0, 0, 1],[ 0,+1, 0],[+1,+1, 3],[+1, 0, 2],[+1,+1, 3]];
var InitInfoBPS = [[ 0,+1, 0],[ 0,+1, 0],[ 0,+1, 0],[ 0,+1, 0],[+1,+1, 0],[ 0,+1, 0],[+1,+1, 0]];
var InitInfoBPS2 = [[ 0,+1, 0],[ 0, 0, 2],[ 0, 0, 2],[ 0,+1, 0],[ 0, 0, 2],[ 0, 0, 2],[ 0, 0, 2]];
var InitInfoAcid = [[+1, 0, 0],[+2, 0, 2],[+2, 0, 2],[+2,+1, 0],[+2,+1, 0],[+2, 0, 2],[+2,+1, 0]];
var InitInfoTrukaMy = [[ 0, 0, 0],[+1, 0, 2],[+1, 0, 2],[ 0, 0, 0],[+1, 0, 0],[+1, 0, 2],[+1, 0, 0]];
var InitInfoTwin = [[ 0, 0, 0],[+1,+1, 0],[ 0,+1, 0],[ 0,+1, 0],[+1,+1, 0],[ 0,+1, 0],[+1,+1, 0]];
var InitInfoFun = [[ 0, 0, 0],[+1, 0, 0],[+1, 0, 0],[+1, 0, 0],[+1, 0, 0],[+1, 0, 0],[+1, 0, 0]];

var ColorSRS = [1, 2, 3, 4, 5, 6, 7];
var ColorSega = [7, 2, 3, 4, 6, 1, 5];
var ColorQQ = [7, 1, 3, 4, 5, 6, 2];
var ColorTengen = [7, 3, 6, 2, 5, 4, 1];
var ColorAtari = [7, 4, 6, 2, 1, 5, 3];
var ColorNBlox = [3, 6, 2, 7, 1, 4, 5];
var ColorC2 = [5, 2, 6, 4, 1, 7, 9];
var ColorNintendo = [9, 2, 7, 9, 2, 9, 7];
var ColorMS = [7, 6, 4, 1, 2, 8, 5];
var ColorE60 = [5, 5, 5, 5, 5, 5, 5];
var ColorIBM = [7, 9, 6, 2, 5, 3, 1];
var ColorJJSRS = [5, 1, 3, 4, 7, 6, 2];
var Color5000 = [7, 6, 8, 4, 5, 1, 2];
var ColorDX = [9, 7, 2, 4, 3, 5, 6];
var ColorMybo = [5, 6, 7, 4, 3, 2, 1];
var ColorQuadra = [5, 4, 6, 3, 1, 2, 7];
var ColorGameBoy = [9, 2, 7, 8, 7, 9, 2];
var ColorTNET = [5, 5, 6, 4, 2, 4, 7];
var ColorCDi = [3, 7, 5, 9, 6, 2, 4];
var ColorSHC = [2, 4, 5, 7, 1, 3, 6];
var ColorMax = [2, 7, 1, 6, 4, 5, 9];
var ColorIntelore = [9, 5, 2, 4, 6, 7, 1];
var ColorZen = [6, 2, 7, 4, 3, 5, 1];
var ColorTris = [3, 7, 5, 6, 2, 1, 4];
var ColorSHMac = [5, 4, 3, 7, 2, 1, 6];
var ColorBPS = [7, 4, 1, 2, 6, 9, 5];
var ColorBPS2 = [7, 1, 3, 4, 6, 2, 5];
var ColorAcid = [4, 6, 1, 5, 7, 2, 3];
var ColorCrazyYXWD = [9, 1, 6, 4, 2, 7, 5];
var ColorTrukaMy = [5, 2, 1, 6, 4, 7, 3];
var ColorTwin = [7, 6, 3, 2, 1, 4, 5];
var ColorFun = [1, 7, 4, 3, 6, 2, 5];

var RotSys = [
  {
    initinfo: InitInfoSRS,
    offset: OffsetSRS,
    color: ColorSRS,
  },
  {
    initinfo: InitInfoSRS,
    offset: OffsetSRS,
    color: ColorC2,
  },
  {
    initinfo: InitInfoARS,
    offset: OffsetARS,
    color: ColorSega,
  },
  {
    initinfo: InitInfoDTET,
    offset: OffsetDTET,
    color: ColorSega,
  },
  {
    initinfo: InitInfoQQ,
    offset: OffsetQQ,
    color: ColorQQ,
  },
  {
    initinfo: InitInfoAtari,
    offset: OffsetAtari,
    color: ColorAtari,
  },
  {
    initinfo: InitInfoAtari,
    offset: OffsetAtari,
    color: ColorTengen,
  },
  {
    initinfo: InitInfoNBlox,
    offset: OffsetNBlox,
    color: ColorNBlox,
  },
  {
    initinfo: InitInfoNintendo,
    offset: OffsetNintendo,
    color: ColorNintendo,
  },
  {
    initinfo: InitInfoMS,
    offset: OffsetMS,
    color: ColorMS,
  },
  {
    initinfo: InitInfoE60,
    offset: OffsetE60,
    color: ColorE60,
  },
  {
    initinfo: InitInfoE60,
    offset: OffsetE60,
    color: ColorIBM,
  },
  {
    initinfo: InitInfoJJSRS,
    offset: OffsetJJSRS,
    color: ColorJJSRS,
  },
  {
    initinfo: InitInfo5000,
    offset: Offset5000,
    color: Color5000,
  },
  {
    initinfo: InitInfoPlus,
    offset: OffsetPlus,
    color: ColorSega,
  },
  {
    initinfo: InitInfoDX,
    offset: OffsetDX,
    color: ColorDX,
  },
  {
    initinfo: InitInfoNintendoL,
    offset: OffsetNintendoL,
    color: ColorGameBoy,
  },
  {
    initinfo: InitInfoQuadra,
    offset: OffsetQuadra,
    color: ColorQuadra,
  },
  {
    initinfo: InitInfoMybo,
    offset: OffsetMybo,
    color: ColorMybo,
  },
  {
    initinfo: InitInfoTNET,
    offset: OffsetTNET,
    color: ColorTNET,
  },
  {
    initinfo: InitInfoCDi,
    offset: OffsetCDi,
    color: ColorCDi,
  },
  { // spectrum Holobyte Classic (PC)
    initinfo: InitInfoSHC,
    offset: OffsetSHC,
    color: ColorSHC,
  },
  {
    initinfo: InitInfoMax,
    offset: OffsetJJSRS,
    color: ColorMax,
  },
  { //4 games at puzzle-game-download.com / intelore, interesting rs
    initinfo: InitInfoIntelore,
    offset: OffsetIntelore,
    color: ColorIntelore,
  },
  {
    initinfo: InitInfoZen,
    offset: OffsetZen,
    color: ColorZen,
  },
  {
    initinfo: InitInfoTris,
    offset: OffsetTris,
    color: ColorTris,
  },
  {
    initinfo: InitInfoE60,
    offset: OffsetE60,
    color: ColorSHMac,
  },
  {
    initinfo: InitInfoBPS,
    offset: OffsetBPS,
    color: ColorBPS,
  },
  {
    initinfo: InitInfoBPS2,
    offset: OffsetSRS,
    color: ColorBPS2,
  },
  { // nintendo R with O 1right plus all pieces 1right
    initinfo: InitInfoAcid,
    offset: OffsetAcid,
    color: ColorAcid,
  },
  {
    initinfo: InitInfoSRS,
    offset: OffsetCrazyYXWD,
    color: ColorCrazyYXWD,
  },
  {
    initinfo: InitInfoTrukaMy,
    offset: OffsetTrukaMy,
    color: ColorTrukaMy,
  },
  {
    initinfo: InitInfoTwin,
    offset: OffsetTwin,
    color: ColorTwin,
  },
  {
    initinfo: InitInfoFun,
    offset: OffsetFun,
    color: ColorFun,
  },
];

// Define shapes and spawns.
var PieceI = {
  index: 0,
  tetro: TetroI,
  rect: RectI
};
var PieceJ = {
  index: 1,
  tetro: TetroJ,
  rect: RectJ
};
var PieceL = {
  index: 2,
  tetro: TetroL,
  rect: RectL
};
var PieceO = {
  index: 3,
  tetro: TetroO,
  rect: RectO
};
var PieceS = {
  index: 4,
  tetro: TetroS,
  rect: RectS
};
var PieceT = {
  index: 5,
  tetro: TetroT,
  rect: RectT
};
var PieceZ = {
  index: 6,
  tetro: TetroZ,
  rect: RectZ
};

var flags = {
  hardDrop: 1,
  moveRight: 2,
  moveLeft: 4,
  moveDown: 8,
  holdPiece: 16,
  rotRight: 32,
  rotLeft: 64,
  rot180: 128,
  moveRight3: 256,
  moveLeft3: 512,
};
var cellFlags = {
  maskColor: 255,
  maskConn: 4096-256,
  connRight: 256,
  connDown: 512,
  connLeft: 1024,
  connUp: 2048,
  maskIndex: 65536-4096, //index+1. 0 = not specified, don't care
  heightIndex: 12,
};

var fourWays = [
  {dx:+1,dy:0,connFlag:cellFlags.connRight},
  {dx:0,dy:+1,connFlag:cellFlags.connDown},
  {dx:-1,dy:0,connFlag:cellFlags.connLeft},
  {dx:0,dy:-1,connFlag:cellFlags.connUp}];

var pieceSymmetryIndex = [0, 2, 1, 3, 6, 5, 4];

var pieces = (function(pieces){
  for(var pi=0;pi<7;pi++){
    for(var ri=0;ri<4;ri++){
      var p=pieces[pi].tetro[ri];
      for(var x=0;x<4;x++){
        for(var y=0;y<4;y++){
          if(p[x][y]!==0){
            if(x+1<4&&p[x+1][y]!==0){
              p[x][y]|=cellFlags.connRight;
            }
            if(y+1<4&&p[x][y+1]!==0){
              p[x][y]|=cellFlags.connDown;
            }
            if(x>0&&p[x-1][y]!==0){
              p[x][y]|=cellFlags.connLeft;
            }
            if(y>0&&p[x][y-1]!==0){
              p[x][y]|=cellFlags.connUp;
            }
          }
        }
      }
    }
  }
  return pieces;
})([PieceI, PieceJ, PieceL, PieceO, PieceS, PieceT, PieceZ]);

// Finesse data
// index x orientatio x column = finesse
// finesse[0][0][4] = 1
// TODO double check these.
var finesse = [
  [
    [1, 2, 1, 0, 1, 2, 1],
    [2, 2, 2, 2, 1, 1, 2, 2, 2, 2],
    [1, 2, 1, 0, 1, 2, 1],
    [2, 2, 2, 2, 1, 1, 2, 2, 2, 2]
  ],
  [
    [1, 2, 1, 0, 1, 2, 2, 1],
    [2, 2, 3, 2, 1, 2, 3, 3, 2],
    [2, 3, 2, 1, 2, 3, 3, 2],
    [2, 3, 2, 1, 2, 3, 3, 2, 2]
  ],
  [
    [1, 2, 1, 0, 1, 2, 2, 1],
    [2, 2, 3, 2, 1, 2, 3, 3, 2],
    [2, 3, 2, 1, 2, 3, 3, 2],
    [2, 3, 2, 1, 2, 3, 3, 2, 2]
  ],
  [
    [1, 2, 2, 1, 0, 1, 2, 2, 1],
    [1, 2, 2, 1, 0, 1, 2, 2, 1],
    [1, 2, 2, 1, 0, 1, 2, 2, 1],
    [1, 2, 2, 1, 0, 1, 2, 2, 1]
  ],
  [
    [1, 2, 1, 0, 1, 2, 2, 1],
    [2, 2, 2, 1, 1, 2, 3, 2, 2],
    [1, 2, 1, 0, 1, 2, 2, 1],
    [2, 2, 2, 1, 1, 2, 3, 2, 2]
  ],
  [
    [1, 2, 1, 0, 1, 2, 2, 1],
    [2, 2, 3, 2, 1, 2, 3, 3, 2],
    [2, 3, 2, 1, 2, 3, 3, 2],
    [2, 3, 2, 1, 2, 3, 3, 2, 2]
  ],
  [
    [1, 2, 1, 0, 1, 2, 2, 1],
    [2, 2, 2, 1, 1, 2, 3, 2, 2],
    [1, 2, 1, 0, 1, 2, 2, 1],
    [2, 2, 2, 1, 1, 2, 3, 2, 2]
  ]
];

/**
 * Gameplay specific vars.
 */
var gravityUnit = 1.0/64;
var gravityArr = (function() {
  var array = [];
  array.push(0);
  for (var i = 1; i < 64; i*=2)
    array.push(i / 64);
  for (var i = 1; i <= 5; i+=1)
    array.push(i);
  array.push(Infinity);
  return array;
})();
var gravityNameArr = (function() {
  var array = [];
  array.push('0');
  for (var i = 1; i < 64; i*=2)
    array.push('1/'+(64/i)+' G');
  for (var i = 1; i <= 5; i+=1)
    array.push(i + 'G');
  array.push("20G (?)")
  return array;
})();
var dasNameArr = (function() {
  var array = [];
  array.push('0');
  for (var i = 1; i < 16; i++)
    array.push(i+', '+(i>=6?(i/60).toFixed(2)+"s":~~(i*100/6+.5)+"ms"));
  return array;
})();

var lockDelayLimit = void 0;

var mySettings = {
  DAS: 9,
  ARR: 1,
  SoftDrop: 7,
  Gravity: 0,
  LockDelay: 30,
  RotSys: 0,
  Next: 6,
  Size: 0,
  Sound: 2,
  Volume: 50,
  Block: 2,
  Ghost: 1,
  Grid: 1,
  Outline: 1,
  DASCut: 0,
  NextSide: 0
};

var settings = mySettings; // initialized by reference; replaced when game starts and replay

var settingName = {
  DAS: "DAS ????",
  ARR: "ARR ????",
  SoftDrop: "Soft Drop ????",
  Gravity: "Gravity ????",
  LockDelay: "Lock Delay ????",
  RotSys: "Rotation ????",
  Next: "Next ????",
  Size: "Size ??",
  Sound: "Sound ??",
  Volume: "Volume ??",
  Block: "Block ??",
  Ghost: "Ghost ??",
  Grid: "Grid ??",
  Outline: "Outline ????",
  DASCut: "DAS Cut ????",
  NextSide: "Next Side ????"
};
var setting = {
  DAS: dasNameArr,
  ARR: ["0 (?)","1, 60Hz","2, 30Hz","3, 20Hz","4, 15Hz","5, 12Hz","6, 10Hz","7, 8.6Hz","8, 7.5Hz","9, 6.7Hz","10, 6Hz"],
  SoftDrop: gravityNameArr,
  Gravity: ["Auto"].concat(gravityNameArr),
  LockDelay: range(0, 101),
  RotSys: [
    'Super', 'CultrisII', 'Arika*', 'DTET', 'NM/QQ', 'Atari', 'Tengen',
    'N-Blox', 'Nintendo', 'Microsoft', 'E-60', 'IBM PC', 'JJ', '5000',
    'Plus', 'DX', 'GameBoy', 'Quadra', 'Mybo', 'TNET', 'CD-i',
    'SH-C', 'Max', 'Intelore', 'Zen', 'Tris', 'Quinn', 'BPS', 'BPS2',
    'ACiD', '????', 'Truka�My', 'Twin', 'TFun2k'
  ],
  Next: ['-', '1', '2', '3', '4', '5', '6'],
  Size: ['Auto', 'Small', 'Medium', 'Large', 'Larger'],
  Sound: ['Off', 'Memes', 'Dr.Ocelot'],
  Volume: range(0, 101),
  Block: ['Shaded', 'Solid', 'Glossy', 'Arika', 'World'],
  Ghost: ['Grey', 'Colored', 'Off', 'Hidden'],
  Grid: ['Off', 'On'],
  Outline: ['Off', 'On', 'Hidden', 'Only'],
  DASCut: ['Off', 'On'],
  NextSide: ['Right', 'Left']
};
var arrRowGen = {
  'simple':
  function(arr,offset,range,width) {
    var holex = ~~(rng.next()*range)+offset;
    for(var x = 0; x < width; x++){
      arr[holex + x] = 0;
    }
  },
  'simplemessy':
  function(arr,ratio) {
    var hashole = false;
    for(var x = 0; x < stack.width; x++){
      if(rng.next()>=ratio) {
        hashole=true;
        arr[x] = 0;
      }
    }
    if(hashole===false){
      arr[~~(rng.next()*10)] = 0;
    }
  },
};

var arrStages = [
  {begin:   0, delay: 60*5, gen:function(arr){arrRowGen.simple(arr,0,7,4)}},
  {begin:   5, delay: 60*7, gen:function(arr){arrRowGen.simple(arr,0,7,4)}},
  {begin:  20, delay: 60*5, gen:function(arr){arrRowGen.simple(arr,0,7,4)}},
  {begin:  40, delay: 60*4, gen:function(arr){arrRowGen.simple(arr,2,3,4)}},
  {begin:  50, delay: 60*2, gen:function(arr){arrRowGen.simple(arr,4,1,2)}},
  {begin:  70, delay: 60*5, gen:function(arr){arrRowGen.simple(arr,0,9,2)}},
  {begin:  80, delay: 60*4, gen:function(arr){arrRowGen.simple(arr,0,9,2)}},
  {begin:  90, delay: 60*3, gen:function(arr){arrRowGen.simple(arr,0,9,2)}},

  {begin: 100, delay: 60*4, gen:function(arr){arrRowGen.simple(arr,0,10,1)}},
  {begin: 120, delay: 60*3.5, gen:function(arr){arrRowGen.simple(arr,0,10,1)}},
  {begin: 150, delay: 60*4, gen:function(arr){arrRowGen.simple(arr,0,7,4)}},
  {begin: 170, delay: 60*3.5, gen:function(arr){arrRowGen.simple(arr,0,7,4)}},

  {begin: 200, delay: 60*3.5, gen:function(arr){arrRowGen.simple(arr,0,10,1)}},
  {begin: 220, delay: 60*3, gen:function(arr){arrRowGen.simple(arr,0,10,1)}},
  {begin: 250, delay: 60*2.5, gen:function(arr){arrRowGen.simple(arr,0,9,2)}},

  {begin: 300, delay: 60*3.5, gen:function(arr){arrRowGen.simplemessy(arr,0.9)}},
  {begin: 320, delay: 60*3, gen:function(arr){arrRowGen.simplemessy(arr,0.9)}},
  {begin: 350, delay: 60*3.5, gen:function(arr){arrRowGen.simplemessy(arr,0.8)}},
  {begin: 390, delay: 60*3, gen:function(arr){arrRowGen.simplemessy(arr,0.8)}},
  {begin: 400, delay: 60*4, gen:function(arr){arrRowGen.simplemessy(arr,0.6)}},
  {begin: 430, delay: 60*5, gen:function(arr){arrRowGen.simplemessy(arr,0.4)}},
  {begin: 450, delay: 60*7, gen:function(arr){arrRowGen.simplemessy(arr,0.1)}},

  {begin: 470, delay: 60*7, gen:function(arr){arrRowGen.simplemessy(arr,0.4)}},
  {begin: 500, delay: 60*3, gen:function(arr){arrRowGen.simplemessy(arr,0.8)}},
  {begin: 550, delay: 60*2.5, gen:function(arr){arrRowGen.simplemessy(arr,0.8)}},
  {begin: 600, delay: 60*3, gen:function(arr){arrRowGen.simplemessy(arr,0.6)}},
  {begin: 650, delay: 60*2.5, gen:function(arr){arrRowGen.simplemessy(arr,0.6)}},
  {begin: 700, delay: 60*3.5, gen:function(arr){arrRowGen.simplemessy(arr,0.4)}},
  {begin: 750, delay: 60*3, gen:function(arr){arrRowGen.simplemessy(arr,0.4)}},
  {begin: 780, delay: 60*2.5, gen:function(arr){arrRowGen.simplemessy(arr,0.4)}},
  {begin: 800, delay: 60*2, gen:function(arr){arrRowGen.simplemessy(arr,0.9)}},
  {begin: 900, delay: 60*1.75, gen:function(arr){arrRowGen.simple(arr,0,10,1)}},
  {begin: 950, delay: 60*1.5, gen:function(arr){arrRowGen.simple(arr,0,10,1)}},

  {begin:1000, delay: 60*5, gen:function(arr){arrRowGen.simplemessy(arr,0.0)}},
  {begin:1020, delay: 60*4, gen:function(arr){arrRowGen.simplemessy(arr,0.0)}},
  {begin:1050, delay: 60*4, gen:function(arr){arrRowGen.simple(arr,1,1,8)}},
  {begin:1100, delay: 60*3, gen:function(arr){arrRowGen.simple(arr,2,1,6)}},
  {begin:1150, delay: 60*3, gen:function(arr){arrRowGen.simple(arr,3,1,4)}},
  {begin:1200, delay: 60*2, gen:function(arr){arrRowGen.simple(arr,4,1,2)}},
  {begin:1210, delay: 60*1.5, gen:function(arr){arrRowGen.simple(arr,4,1,2)}},
  {begin:1210, delay: 60*1, gen:function(arr){arrRowGen.simple(arr,4,1,2)}},
  {begin:1250, delay: 60*2, gen:function(arr){arrRowGen.simple(arr,9,1,1)}},
  {begin:1260, delay: 60*0.5, gen:function(arr){arrRowGen.simple(arr,9,1,1)}},
  {begin:1300, delay: 60*3, gen:function(arr){arrRowGen.simplemessy(arr,0.0)}},
  {begin:1350, delay: 60*3, gen:function(arr){arrRowGen.simplemessy(arr,0.1)}},
  {begin:1400, delay: 60*4, gen:function(arr){arrRowGen.simplemessy(arr,0.15)}},
  {begin:1450, delay: 60*4, gen:function(arr){arrRowGen.simplemessy(arr,0.2)}},
  {begin:1480, delay: 60*5, gen:function(arr){arrRowGen.simplemessy(arr,0.2)}},

  {begin:1500, delay: 60*1.5, gen:function(arr){arrRowGen.simple(arr,0,9,2)}},
  {begin:1550, delay: 60*1.4, gen:function(arr){arrRowGen.simple(arr,0,9,2)}},
  {begin:1600, delay: 60*1.3, gen:function(arr){arrRowGen.simple(arr,0,9,2)}},
  {begin:1650, delay: 60*1.2, gen:function(arr){arrRowGen.simple(arr,0,9,2)}},
  {begin:1700, delay: 60*1.3, gen:function(arr){arrRowGen.simple(arr,0,10,1)}},
  {begin:1800, delay: 60*1.2, gen:function(arr){arrRowGen.simple(arr,0,10,1)}},
  {begin:1850, delay: 60*1.15, gen:function(arr){arrRowGen.simple(arr,0,10,1)}},
  {begin:1900, delay: 60*1.1, gen:function(arr){arrRowGen.simple(arr,0,10,1)}},
  {begin:1950, delay: 60*1.05, gen:function(arr){arrRowGen.simple(arr,0,10,1)}},

  {begin:2000, delay: 60*1.0, gen:function(arr){arrRowGen.simple(arr,0,10,1)}},
  {begin:2050, delay: 60*0.95, gen:function(arr){arrRowGen.simple(arr,0,10,1)}},
  {begin:2100, delay: 60*0.9, gen:function(arr){arrRowGen.simple(arr,0,10,1)}},
  {begin:2150, delay: 60*0.85, gen:function(arr){arrRowGen.simple(arr,0,10,1)}},
  {begin:2180, delay: 60*0.8, gen:function(arr){arrRowGen.simple(arr,0,10,1)}},
  {begin:2190, delay: 60*1.0, gen:function(arr){arrRowGen.simple(arr,0,10,1)}},
  {begin:2200, delay: 60*0.8, gen:function(arr){arrRowGen.simple(arr,0,10,1)}},
  {begin:2300, delay: 60*0.75, gen:function(arr){arrRowGen.simple(arr,0,10,1)}},
  {begin:2400, delay: 60*0.7, gen:function(arr){arrRowGen.simple(arr,0,10,1)}},
  {begin:2450, delay: 60*0.6, gen:function(arr){arrRowGen.simple(arr,0,10,1)}},
  {begin:2500, delay: 60*0.5, gen:function(arr){arrRowGen.simple(arr,0,10,1)}},

];

var sprintRanks= [
  {t:600, u:"????", b:"Zen"},
  {t:540, u:"??9??", b:"9 min...?"},
  {t:480, u:"??8??", b:"8 min...?"},
  {t:420, u:"??7??", b:"7 min...?"},
  {t:360, u:"??6??", b:"6 min...?"},
  {t:300, u:"??5??", b:"5 min...?"},
  {t:240, u:"??��", b:"Finally..."},
  {t:210, u:"<small>???????</small>", b:"Too slow."},
  {t:180, u:"??", b:"Well..."},
  {t:160, u:"<small>??????</small>", b:"Go faster."},
  {t:140, u:"<small>???????</small>", b:"Any more?"},
  {t:120, u:"2???", b:"Beat 2 min."},
  {t:110, u:"???", b:"So easy."},
  {t:100, u:"???", b:"New world."},
  {t: 90, u:"????", b:"1 drop/sec!"},
  {t: 80, u:"????", b:"Not bad."},
  {t: 73, u:"????", b:"Going deeper."},
  {t: 69, u:"??10?", b:"10 sec faster."},
  {t: 63, u:"????", b:"Approaching."},
  {t: 60, u:"????", b:"Almost there!"},
  {t: 56, u:"1?????", b:"1-min Sprinter!"},
  {t: 53, u:"?????", b:"<small>No longer rookie.</small>"},
  {t: 50, u:"50???", b:"Beat 50."},
  {t: 48, u:"??2?", b:"2 drops/sec!"},
  {t: 45, u:"????", b:"u can tetris."},
  {t: 42, u:"????", b:"Interesting."},
  {t: 40, u:"????", b:"So?"},
  {t: 38, u:"??", b:"Good."},
  {t: 35, u:"????", b:"Unstoppable."},
  {t: 33, u:"??", b:"Octopus"},
  {t: 31, u:"??3?", b:"3 drops/sec!"},
  {t: 30, u:"???", b:"Noooo"},
  {t: 29, u:"???", b:"You win."},
  {t: 27, u:"????", b:"Magic."},
  {t: 25, u:"??", b:"Lightning!"},
  {t: 24, u:"??4?", b:"4 drops/sec!"},
  {t: 23, u:"??", b:"Alien."},
  {t: 22, u:"????", b:"Beats Alien."},
  {t: 21, u:"????", b:"<small>Save the world?</small>"},
  {t: 20, u:"????", b:"r u sure?"},
  {t: 19, u:"5???", b:"5pps"},
  {t: 18, u:"��", b:"..."},
  {t: 16.66, u:"����", b:"......"},
  {t: 14.28, u:"6???", b:"6pps"},
  {t: 12.50, u:"7???", b:"7pps"},
  {t: 11.11, u:"8???", b:"8pps"},
  {t: 10.00, u:"9???", b:"9pps"},
  {t:  9.00, u:"10???", b:"10pps"},
  {t:  0.00, u:"?_?", b:"?_?"},
  {t:  -1/0, u:"?_?", b:"?_?"}
];