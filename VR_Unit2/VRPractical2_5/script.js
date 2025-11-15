/* Note
   Feel free to use classes from past classwork and practical activities.  You may also create new classes.  
   If you wish to use objects from Unit 1, you can use cloneNode( ) to duplicate them.  As an added bonus you 
   can also incorporate classes that have animations integrated into them. 
*/

/* Challenge 1
   Add appropriate classes to use as objects in your maze.  Choose characters to represent these objects and 
   position them in the maze.   In Challenge 3 and 4, you will generate the maze along with any other object 
   you chose to put in the maze.  Get Creative!
*/

let mazeList = [
  [14,13,5,4,3,2,13,5,5,5,4],
  [3,5,5,2,1,5,5,7,5,5,9],
  [6,13,5,7,4,13,4,6,3,5,2],
  [6,3,5,2,10,4,6,11,6,13,5],
  [6,1,5,4,10,2,1,5,15,5,4],
  [6,3,5,2,6,3,5,14,6,12,6],
  [6,1,5,4,6,1,5,5,2,6,6],
  [10,5,5,2,11,3,5,5,5,8,2],
  [10,5,5,5,5,2,3,5,5,5,4],
  [10,5,5,5,5,5,9,13,5,5,2],
  [1,5,5,5,5,4,1,5,5,5,14]
  ];

/* Challenge 2
   Add appropriate classes to use as objects in your map.  Choose characters to represent these objects and position them on the map.   In Challenge 5 and 6, you will generate the map using the character representation of the objects you chose to place in the world. Get Creative!
*/

let scene, maze;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  maze = document.querySelector("#maze")
  const ne_corner = this.document.querySelector(".ne_corner"); //1
  const nw_corner = this.document.querySelector(".nw_corner"); //2
  const se_corner = this.document.querySelector(".se_corner"); //3
  const sw_corner = this.document.querySelector(".sw_corner"); //4
  const we_corridor = this.document.querySelector(".ew_corridor"); //5
  const ns_corridor = this.document.querySelector(".ns_corridor"); //6
  const swe_3way = this.document.querySelector(".swe_3way"); //7
  const nwe_3way = this.document.querySelector(".nwe_3way"); //8
  const nsw_3way = this.document.querySelector(".nsw_3way"); //9
  const nse_3way = this.document.querySelector(".nse_3way"); //10
  const n_deadend = this.document.querySelector(".n_deadend"); //11
  const s_deadend = this.document.querySelector(".s_deadend"); //12
  const e_deadend = this.document.querySelector(".e_deadend"); //13
  const w_deadend = this.document.querySelector(".w_deadend"); //14
  const allway = this.document.querySelector(".allway"); //15
  
  for(let r = 0; r < mazeList.length; r++){
    const col = mazeList[r];
    for(let i = 0;i < col.length ;i++){
      switch (col[i]){
        case 0:
        break;
        case 1:
          m = new MazePiece(ne_corner,{x:5*i,y:0,z:5*r});
          m.generate(maze);
        break;
        case 2:
          m = new MazePiece(nw_corner,{x:5*i,y:0,z:5*r});
          m.generate(maze);
        break;
        case 3:
          m = new MazePiece(se_corner,{x:5*i,y:0,z:5*r});
          m.generate(maze);
        break;
        case 4:
          m = new MazePiece(sw_corner,{x:5*i,y:0,z:5*r});
          m.generate(maze);
        break;
        case 5:
          m = new MazePiece(we_corridor,{x:5*i,y:0,z:5*r});
          m.generate(maze);
        break;
        case 6:
          m = new MazePiece(ns_corridor,{x:5*i,y:0,z:5*r});
          m.generate(maze);
        break;
        case 7:
          m = new MazePiece(swe_3way,{x:5*i,y:0,z:5*r});
          m.generate(maze);
        break;
        case 8:
          m = new MazePiece(nwe_3way,{x:5*i,y:0,z:5*r});
          m.generate(maze);
        break;
        case 9:
          m = new MazePiece(nsw_3way,{x:5*i,y:0,z:5*r});
          m.generate(maze);
        break;
        case 10:
          m = new MazePiece(nse_3way,{x:5*i,y:0,z:5*r});
          m.generate(maze);
        break;
        case 11:
          m = new MazePiece(n_deadend,{x:5*i,y:0,z:5*r});
          m.generate(maze);
        break;
        case 12:
          m = new MazePiece(s_deadend,{x:5*i,y:0,z:5*r});
          m.generate(maze);
        break;
        case 13:
          m = new MazePiece(e_deadend,{x:5*i,y:0,z:5*r});
          m.generate(maze);
        break;
        case 14:
          m = new MazePiece(w_deadend,{x:5*i,y:0,z:5*r});
          m.generate(maze);
        break;
        case 15:
          m = new MazePiece(allway,{x:5*i,y:0,z:5*r});
          m.generate(maze);
        break;
      }
    }

    /* Challenge 3
      Choose a technique to traverse the each character in the string.
    */ 
    /* Challenge 4
       Make an appropriate decision based on the characters you chose to enter 
       in the maze.  Create an instance of the corresponding object.
    */
  }

})