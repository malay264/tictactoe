        var win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
		var a=["#","#","#","#","#","#","#","#","#"];
		var turn;
		var count=0;
        var winner;
        var next;

        startGame();

        function printBoard()
        {
            alert(a[0]+","+a[1]+","+a[2]+"\n"+a[3]+","+a[4]+","+a[5]+"\n"+a[6]+","+a[7]+","+a[8]+"\n");
        }
        function ask()
        {
            var z=prompt("Enter Square No where you want to enter! (number should be between 0 and 8) ");
            nextMove(z);

        }
        function startGame()
        {   
            turn="X";
			winner=null;
			a=["#","#","#","#","#","#","#","#","#"];
            alert("It is human's turn first. Human is X. ");
            ask();
        }

       /* function setMessage(msg)
        {
            document.getElementById("msg").innerText=msg;
		}*/

		function nextMove(square)
        {
            if(winner!=null)
            {
			    alert(winner+" has alredy won!!!!!");
            }
            else if(a[square]=="#")
			{
                count++;
                a[square]=turn;
                printBoard();
				//document.getElementById(square).innerText=turn;
				switchTurn();
            }
            else
            {
                alert("Alredy used square!		Choose another square for: "+turn);
                ask();
            }
        }
		
		function switchTurn()
        {   
            if(checkWinner(turn))
            {
                alert("CONGRATULATIONS!  Mr."+turn+" has won.");
                winner=turn;
			}
            else if(turn == "X")
            {
				if(checkDraw())
				{
					alert("GAME DRAW!- TRY AGAIN!")
				}
				else
				{
                turn = "O";
                aiMove();   
                //printBoard(); 
				}
            }
            else if(turn =="O")
            {
				if(checkDraw())
				{
					alert("GAME DRAW!- TRY AGAIN!")
				}
				else{
               // console.log(a);
                turn = "X";
                printBoard();
                alert("It is "+turn+"'s turn");
                ask();
				}
            }
		}

        function aiMove()
        {
                if(a[4]=="#")
                {
                    count++;
                    a[4]="O";
                    //document.getElementById(4).innerText="O";
                    switchTurn();
                }
                else if(a[0]=="#" && a[2]!="X" && a[6]!="X")
                {
                    count++;
                    a[0]="O";
                    //document.getElementById(0).innerText="O";
                    switchTurn();
                }
                else if(bestMove())
                {
                    count++;
                   // console.log(next);
                    a[next]="O";
                   // document.getElementById(next).innerText="O";
                    switchTurn();
                }
                else if(nearWin())
                {
                    count++;
                   // console.log(next);
                    a[next]="O";
                   // document.getElementById(next).innerText="O";
                    switchTurn();
                }
                else if(a[1]=="#" && a[8]!="X")
                {
                    count++;
                    a[1] = "O";
                   // document.getElementById(1).innerText="O";
                    switchTurn();
                }
                else if(a[2]=="#" && a[8]=="X" && a[4]=="X")
                {
                    count++;
                    a[2]="O";
                   // document.getElementById(2).innerText="O";
                    switchTurn();
                }
                else if(a[7]=="#")
                {
                    count++;
                    a[7]="O";
                   // document.getElementById(7).innerText="O";
                    switchTurn();
                }
               
                else if(a[3]=="#")
                {
                    count++;
                    a[3]="O";
                   // document.getElementById(3).innerText="O";
                    switchTurn();
                }
                else if(a[5]=="#")
                {
                    count++;
                    a[5]="O";
                   // document.getElementById(5).innerText="O";
                    switchTurn();
                }

        }

        function bestMove()
        {
            var i;
            var temp=null;
            for (i=0;i<8;i++)
            {
                var nn=0;
                if(a[win[i][0]]=="O"){++nn;}
                if(a[win[i][1]]=="O"){++nn;}
                if(a[win[i][2]]=="O"){++nn;}
                if(nn==2)
				{
                    
                    if(a[win[i][0]]=="#"){temp=win[i][0];}
                    if(a[win[i][1]]=="#"){temp=win[i][1];}
                    if(a[win[i][2]]=="#"){temp=win[i][2];}
                    
                    if(next!=temp && temp!=null)
                    {
                        next=temp;
                        return true;
                    }
				}
            }
            return false;
        }

        function nearWin()
        {
            var i;
            for (i=0;i<8;i++)
            {
                var temp=null;
                var nn=0;
                if(a[win[i][0]]=="X"){++nn;}
                if(a[win[i][1]]=="X"){++nn;}
                if(a[win[i][2]]=="X"){++nn;}
                if(nn==2)
				{
                    
                    if(a[win[i][0]]=="#"){temp=win[i][0];}
                    if(a[win[i][1]]=="#"){temp=win[i][1];}
                    if(a[win[i][2]]=="#"){temp=win[i][2];}
                    
					if(next!=temp && temp!=null)
                    {	
                        next=temp;
                        return true; }
				}
            }
            return false;
        }
		
		
        function checkWinner(turn)
		{
			var i;
			for (i=0;i<8;i++)
			{
	
					if(a[win[i][0]]==turn && a[win[i][1]]==turn && a[win[i][2]]==turn)
					{
						return true;
					}
			}
			return false;
        }
		function checkDraw()
		{
			var i;
			for(i=0;i<9;i++)
			{
				if(a[i]=="#")
				{
					return false;
				}
			}
			return true;
		}