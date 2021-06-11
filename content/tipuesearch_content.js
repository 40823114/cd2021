var tipuesearch = {"pages": [{'title': '主頁', 'text': '個人倉儲: https://github.com/40823114/cd2021.git \n 小組倉儲: https://github.com/40823146/stage1-ag16 \n 小組網站: https://40823146.github.io/stage1-ag16 \n', 'tags': '', 'url': '主頁.html'}, {'title': 'stage1-ag16', 'text': '', 'tags': '', 'url': 'stage1-ag16.html'}, {'title': '題目-1', 'text': 'stage1-ag16 題目：電風扇 動機：因為天氣變熱了 W2:繪製零件 W3:使用Coppeliasim模擬動作並除錯 W4:報告 \n', 'tags': '', 'url': '題目-1.html'}, {'title': 'W2進度', 'text': '各部位零件 \n 風扇 \n \n 網蓋 \n \n 軸 \n \n 馬達 \n \n 底座 \n \n', 'tags': '', 'url': 'W2進度.html'}, {'title': 'W3進度', 'text': '組合 \n \n', 'tags': '', 'url': 'W3進度.html'}, {'title': '製圖過程', 'text': '畫的時候忘記錄 所以用隱藏回放 \n \n 組裝過程忘記錄 所以同心軸是已經處理好的 \n \n', 'tags': '', 'url': '製圖過程.html'}, {'title': '問題修正', 'text': '馬達與底座連接處沒有選取面，頭沒辦法旋轉，所以多加一段圓柱當主軸。 \n \n', 'tags': '', 'url': '問題修正.html'}, {'title': 'stage2-ag9', 'text': '', 'tags': '', 'url': 'stage2-ag9.html'}, {'title': '題目-2', 'text': 'stage2-ag9 題目：旋轉木馬音樂盒 W5:繪製零件 W6~8:使用Coppeliasim模擬動作並除錯 W9:報告 \n 我負責繪製所有零件及組合圖，齒輪為Solidwork內建。 \n', 'tags': '', 'url': '題目-2.html'}, {'title': 'W5進度', 'text': '齒輪箱 \n \n 連桿1 \n \n 連桿2 \n \n', 'tags': '', 'url': 'W5進度.html'}, {'title': 'W6進度', 'text': '輪子 \n \n 連桿軸 \n \n 底座2 \n \n 上主軸2 \n \n', 'tags': '', 'url': 'W6進度.html'}, {'title': 'W7進度', 'text': '底座2更新 \n \n 上主軸2更新 \n \n \n', 'tags': '', 'url': 'W7進度.html'}, {'title': 'W8進度', 'text': '馬 \n \n', 'tags': '', 'url': 'W8進度.html'}, {'title': 'W9進度', 'text': '報告 \n 組合圖沒有錄影 \n 模擬失敗 \n 模擬影片 \n \n', 'tags': '', 'url': 'W9進度.html'}, {'title': '問題整理', 'text': '針對繪圖部分整理。 \n 題目很早就決定好了，但是結構設計參考網路資料後，沒有達到預期的成效。 \n 外型，尺寸拿捏都需要再加強。 \n 結構沒辦法配合CoppeliaSim的物理碰撞做出有效的運動。 \n', 'tags': '', 'url': '問題整理.html'}, {'title': 'stage3-ag4', 'text': '', 'tags': '', 'url': 'stage3-ag4.html'}, {'title': '直播內容', 'text': 'https://youtu.be/ELGSM1EytFY \n', 'tags': '', 'url': '直播內容.html'}, {'title': 'RoboDK', 'text': '修改座標和數字 讓他來回 \n \n 程式碼 \n \n \n # KMOLab Portable RoboDK pick and place \n from   robolink  import   * \xa0\xa0\xa0  # API to communicate with robodk \n from   robodk  import   * \xa0\xa0\xa0\xa0\xa0  # robodk robotics toolbox \n \xa0 \n # Setup global parameters \n BALL_DIAMETER  =   100   # diameter of one ball \n APPROACH  =   100 \xa0\xa0\xa0\xa0\xa0  # approach distance to grab each part, in mm \n nTCPs  =   6 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0  # number of TCP\'s in the tool \n \xa0 \n #---------------------------------------------- \n # Function definitions \n \xa0 \n def   box_calc(BALLS_SIDE = 4 , BALLS_MAX = None ): \n \xa0\xa0\xa0\xa0 """Calculate a list of points (ball center) as if the balls were stored in a box""" \n \xa0\xa0\xa0\xa0 if   BALLS_MAX  is   None : BALLS_MAX  =   BALLS_SIDE * * 3 \n \xa0\xa0\xa0\xa0 xyz_list  =   [] \n \xa0\xa0\xa0\xa0 for   h  in   range (BALLS_SIDE): \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 for   i  in   range (BALLS_SIDE): \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 for   j  in   range (BALLS_SIDE): \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 xyz_list  =   xyz_list  +   [[(i + 0.5 ) * BALL_DIAMETER, (j + 0.5 ) * BALL_DIAMETER, (h + 0.5 ) * BALL_DIAMETER]] \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 if   len (xyz_list) > =   BALLS_MAX: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 return   xyz_list \n \xa0\xa0\xa0\xa0 return   xyz_list \n \xa0 \n def   pyramid_calc(BALLS_SIDE = 4 ): \n \xa0\xa0\xa0\xa0 """Calculate a list of points (ball center) as if the balls were place in a pyramid""" \n \xa0\xa0\xa0\xa0 #the number of balls can be calculated as: int(BALLS_SIDE*(BALLS_SIDE+1)*(2*BALLS_SIDE+1)/6) \n \xa0\xa0\xa0\xa0 BALL_DIAMETER  =   100 \n \xa0\xa0\xa0\xa0 xyz_list  =   [] \n \xa0\xa0\xa0\xa0 sqrt2  =   2 * * ( 0.5 ) \n \xa0\xa0\xa0\xa0 for   h  in   range (BALLS_SIDE): \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 for   i  in   range (BALLS_SIDE - h): \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 for   j  in   range (BALLS_SIDE - h): \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 height  =   h * BALL_DIAMETER / sqrt2  +   BALL_DIAMETER / 2 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 xyz_list  =   xyz_list  +   [[i * BALL_DIAMETER  +   (h + 1 ) * BALL_DIAMETER * 0.5 , j * BALL_DIAMETER  +   (h + 1 ) * BALL_DIAMETER * 0.5 , height]] \n \xa0\xa0\xa0\xa0 return   xyz_list \n \xa0 \n def   balls_setup(frame, positions): \n \xa0\xa0\xa0\xa0 """Place a list of balls in a reference frame. The reference object (ball) must have been previously copied to the clipboard.""" \n \xa0\xa0\xa0\xa0 nballs  =   len (positions) \n \xa0\xa0\xa0\xa0 step  =   1.0 / (nballs  -   1 ) \n \xa0\xa0\xa0\xa0 for   i  in   range (nballs): \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 newball  =   frame.Paste() \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 newball.setName( \'ball \'   +   str (i))  #set item name \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 newball.setPose(transl(positions[i]))  #set item position with respect to parent \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 newball.setVisible( True ,  False )  #make item visible but hide the reference frame \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 newball.Recolor([ 1 - step * i, step * i,  0.2 ,  1 ])  #set RGBA color \n \xa0 \n def   cleanup_balls(parentnodes): \n \xa0\xa0\xa0\xa0 """Delete all child items whose name starts with \\"ball\\", from the provided list of parent items.""" \n \xa0\xa0\xa0\xa0 todelete  =   [] \n \xa0\xa0\xa0\xa0 for   item  in   parentnodes: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 todelete  =   todelete  +   item.Childs() \n \xa0 \n \xa0\xa0\xa0\xa0 for   item  in   todelete: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 if   item.Name().startswith( \'ball\' ): \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 item.Delete() \n \xa0 \n def   TCP_On(toolitem, tcp_id): \n \xa0\xa0\xa0\xa0 """Attach the closest object to the toolitem Htool pose, \n \xa0\xa0\xa0\xa0 furthermore, it will output appropriate function calls on the generated robot program (call to TCP_On)""" \n \xa0\xa0\xa0\xa0 toolitem.AttachClosest() \n \xa0\xa0\xa0\xa0 toolitem.RDK().RunMessage( \'Set air valve %i on\'   %   (tcp_id + 1 )) \n \xa0\xa0\xa0\xa0 toolitem.RDK().RunProgram( \'TCP_On(%i)\'   %   (tcp_id + 1 )); \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0 \n def   TCP_Off(toolitem, tcp_id, itemleave = 0 ): \n \xa0\xa0\xa0\xa0 """Detaches the closest object attached to the toolitem Htool pose, \n \xa0\xa0\xa0\xa0 furthermore, it will output appropriate function calls on the generated robot program (call to TCP_Off)""" \n \xa0\xa0\xa0\xa0 toolitem.DetachAll(itemleave) \n \xa0\xa0\xa0\xa0 toolitem.RDK().RunMessage( \'Set air valve %i off\'   %   (tcp_id + 1 )) \n \xa0\xa0\xa0\xa0 toolitem.RDK().RunProgram( \'TCP_Off(%i)\'   %   (tcp_id + 1 )); \n \xa0 \n \xa0 \n #---------------------------------------------------------- \n # The program starts here: \n \xa0 \n # Any interaction with RoboDK must be done through RDK: \n RDK  =   Robolink(robodk_path = "C:/robodk/bin/RoboDK.exe" , robodk_ip = \'127.0.0.1\' ) \n \xa0 \n # Turn off automatic rendering (faster) \n RDK.Render( False ) \n \xa0 \n #RDK.Set_Simulation_Speed(500); # set the simulation speed \n \xa0 \n # Gather required items from the station tree \n robot  =   RDK.Item( \'Fanuc M-710iC/50\' ) \n robot_tools  =   robot.Childs() \n #robottool = RDK.Item(\'MainTool\') \n frame1  =   RDK.Item( \'Table 1\' ) \n frame2  =   RDK.Item( \'Table 2\' ) \n \xa0 \n # Copy a ball as an object (same as CTRL+C) \n ballref  =   RDK.Item( \'reference ball\' ) \n ballref.Copy() \n \xa0 \n # Run a pre-defined station program (in RoboDK) to replace the two tables \n prog_reset  =   RDK.Item( \'Replace objects\' ) \n prog_reset.RunProgram() \n \xa0 \n # Call custom procedure to remove old objects \n cleanup_balls([frame1, frame2]) \n \xa0 \n # Make a list of positions to place the objects \n frame1_list  =   pyramid_calc( 4 ) \n frame2_list  =   pyramid_calc( 4 ) \n \xa0 \n # Programmatically place the objects with a custom-made procedure \n balls_setup(frame1, frame1_list) \n \xa0 \n # Delete previously generated tools \n for   tool  in   robot_tools: \n \xa0\xa0\xa0\xa0 if   tool.Name().startswith( \'TCP\' ): \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 tool.Delete() \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0 \n # Calculate tool frames for the suction cup tool of 6 suction cups \n TCP_list  =   [] \n for   i  in   range (nTCPs): \n \xa0\xa0\xa0\xa0 TCPi_pose  =   transl( 0 , 0 , 100 ) * rotz(( 360 / nTCPs) * i * pi / 180 ) * transl( 125 , 0 , 0 ) * roty(pi / 2 ) \n \xa0\xa0\xa0\xa0 TCPi  =   robot.AddTool(TCPi_pose,  \'TCP %i\'   %   (i + 1 )) \n \xa0\xa0\xa0\xa0 TCP_list.append(TCPi) \n \xa0 \n TCP_0  =   TCP_list[ 0 ] \n \xa0 \n # Turn on automatic rendering \n RDK.Render( True ) \n \xa0 \n # Move balls\xa0\xa0\xa0  \n robot.setPoseTool(TCP_list[ 0 ]) \n nballs_frame1  =   len (frame1_list) \n nballs_frame2  =   len (frame2_list) \n idTake  =   nballs_frame1  -   1 \n idLeave  =   0 \n idTCP  =   0 \n target_app_frame  =   transl( 2 * BALL_DIAMETER,  2 * BALL_DIAMETER,  4 * BALL_DIAMETER) * roty(pi) * transl( 0 , 0 , - APPROACH) \n \xa0 \n while   idTake > =   0 : \n \xa0\xa0\xa0\xa0 # ------------------------------------------------------------------ \n \xa0\xa0\xa0\xa0 # first priority: grab as many balls as possible \n \xa0\xa0\xa0\xa0 # the tool is empty at this point, so take as many balls as possible (up to a maximum of 6 -> nTCPs) \n \xa0\xa0\xa0\xa0 ntake  =   min (nTCPs, idTake  +   1 ) \n \xa0 \n \xa0\xa0\xa0\xa0 # approach to frame 1 \n \xa0\xa0\xa0\xa0 robot.setPoseFrame(frame1) \n \xa0\xa0\xa0\xa0 robot.setPoseTool(TCP_0) \n \xa0\xa0\xa0\xa0 robot.MoveJ([ 0 , 0 , 0 , 0 , 10 , - 200 ]) \n \xa0\xa0\xa0\xa0 robot.MoveJ(target_app_frame) \n \xa0 \n \xa0\xa0\xa0\xa0 # grab ntake balls from frame 1 \n \xa0\xa0\xa0\xa0 for   i  in   range (ntake): \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 TCPi  =   TCP_list[i] \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 robot.setPoseTool(TCPi) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 # calculate target wrt frame1: rotation about Y is needed since Z and X axis are inverted \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 target  =   transl(frame1_list[idTake]) * roty(pi) * rotx( 30 * pi / 180 ) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 target_app  =   target * transl( 0 , 0 , - APPROACH) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 idTake  =   idTake  -   1 \xa0\xa0\xa0\xa0\xa0\xa0\xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 robot.MoveL(target_app) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 robot.MoveL(target) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 TCP_On(TCPi, i) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 robot.MoveL(target_app) \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 # ------------------------------------------------------------------ \n \xa0\xa0\xa0\xa0 # second priority: unload the tool\xa0\xa0\xa0\xa0  \n \xa0\xa0\xa0\xa0 # approach to frame 2 and place the tool balls into table 2 \n \xa0\xa0\xa0\xa0 robot.setPoseTool(TCP_0) \n \xa0\xa0\xa0\xa0 robot.MoveJ(target_app_frame) \n \xa0\xa0\xa0\xa0 robot.MoveJ([ 0 , 0 , 0 , 0 , 10 , - 200 ]) \n \xa0\xa0\xa0\xa0 robot.setPoseFrame(frame2)\xa0\xa0\xa0  \n \xa0\xa0\xa0\xa0 robot.MoveJ(target_app_frame) \n \xa0\xa0\xa0\xa0 for   i  in   range (ntake): \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 TCPi  =   TCP_list[i] \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 robot.setPoseTool(TCPi) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 if   idLeave > nballs_frame2 - 1 : \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 raise   Exception( "No room left to place objects in Table 2" ) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 # calculate target wrt frame1: rotation of 180 about Y is needed since Z and X axis are inverted \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 target  =   transl(frame2_list[idLeave]) * roty(pi) * rotx( 30 * pi / 180 ) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 target_app  =   target * transl( 0 , 0 , - APPROACH) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 idLeave  =   idLeave  +   1 \xa0\xa0\xa0\xa0\xa0\xa0\xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 robot.MoveL(target_app) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 robot.MoveL(target) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 TCP_Off(TCPi, i, frame2) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 robot.MoveL(target_app) \n \xa0 \n \xa0\xa0\xa0\xa0 robot.MoveJ(target_app_frame) \n \xa0 \n # Move home when the robot finishes \n robot.MoveJ([ 0 , 0 , 0 , 0 , 10 , - 200 ]) \n \xa0 \n \xa0 \n \xa0 \n # Gather required items from the station tree \n robot  =   RDK.Item( \'Fanuc M-710iC/50\' ) \n robot_tools  =   robot.Childs() \n #robottool = RDK.Item(\'MainTool\') \n frame1  =   RDK.Item( \'Table 1\' ) \n frame2  =   RDK.Item( \'Table 2\' ) \n \xa0 \n \xa0 \n \xa0 \n # Call custom procedure to remove old objects \n cleanup_balls([frame1 , frame2]) \n \xa0 \n \xa0 \n # Make a list of positions to place the objects \n frame1_list  =   pyramid_calc( 4 ) \n frame2_list  =   pyramid_calc( 4 ) \n \xa0 \n # Programmatically place the objects with a custom-made procedure \n balls_setup(frame2, frame2_list) \n \xa0 \n # Delete previously generated tools \n for   tool  in   robot_tools: \n \xa0\xa0\xa0\xa0 if   tool.Name().startswith( \'TCP\' ): \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 tool.Delete() \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0 \n # Calculate tool frames for the suction cup tool of 6 suction cups \n TCP_list  =   [] \n for   i  in   range (nTCPs): \n \xa0\xa0\xa0\xa0 TCPi_pose  =   transl( 0 , 0 , 100 ) * rotz(( 360 / nTCPs) * i * pi / 180 ) * transl( 125 , 0 , 0 ) * roty(pi / 2 ) \n \xa0\xa0\xa0\xa0 TCPi  =   robot.AddTool(TCPi_pose,  \'TCP %i\'   %   (i + 1 )) \n \xa0\xa0\xa0\xa0 TCP_list.append(TCPi) \n \xa0 \n TCP_0  =   TCP_list[ 0 ] \n \xa0 \n \xa0 \n \xa0 \n # Move balls\xa0\xa0\xa0  \n robot.setPoseTool(TCP_list[ 0 ]) \n nballs_frame2  =   len (frame2_list) \n nballs_frame1  =   len (frame1_list) \n idTake  =   nballs_frame2  -   1 \n idLeave  =   0 \n idTCP  =   0 \n target_app_frame  =   transl( 2 * BALL_DIAMETER,  2 * BALL_DIAMETER,  4 * BALL_DIAMETER) * roty(pi) * transl( 0 , 0 , - APPROACH) \n \xa0 \n while   idTake > =   0 : \n \xa0\xa0\xa0\xa0 # ------------------------------------------------------------------ \n \xa0\xa0\xa0\xa0 # first priority: grab as many balls as possible \n \xa0\xa0\xa0\xa0 # the tool is empty at this point, so take as many balls as possible (up to a maximum of 6 -> nTCPs) \n \xa0\xa0\xa0\xa0 ntake  =   min (nTCPs, idTake  +   1 ) \n \xa0 \n \xa0\xa0\xa0\xa0 # approach to frame 1 \n \xa0\xa0\xa0\xa0 robot.setPoseFrame(frame2) \n \xa0\xa0\xa0\xa0 robot.setPoseTool(TCP_0) \n \xa0\xa0\xa0\xa0 robot.MoveJ([ 0 , 0 , 0 , 0 , 10 , - 200 ]) \n \xa0\xa0\xa0\xa0 robot.MoveJ(target_app_frame) \n \xa0 \n \xa0\xa0\xa0\xa0 # grab ntake balls from frame 1 \n \xa0\xa0\xa0\xa0 for   i  in   range (ntake): \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 TCPi  =   TCP_list[i] \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 robot.setPoseTool(TCPi) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 # calculate target wrt frame1: rotation about Y is needed since Z and X axis are inverted \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 target  =   transl(frame2_list[idTake]) * roty(pi) * rotx( 30 * pi / 180 ) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 target_app  =   target * transl( 0 , 0 , - APPROACH) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 idTake  =   idTake  -   1 \xa0\xa0\xa0\xa0\xa0\xa0\xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 robot.MoveL(target_app) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 robot.MoveL(target) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 TCP_On(TCPi, i) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 robot.MoveL(target_app) \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 # ------------------------------------------------------------------ \n \xa0\xa0\xa0\xa0 # second priority: unload the tool\xa0\xa0\xa0\xa0  \n \xa0\xa0\xa0\xa0 # approach to frame 2 and place the tool balls into table 2 \n \xa0\xa0\xa0\xa0 robot.setPoseTool(TCP_0) \n \xa0\xa0\xa0\xa0 robot.MoveJ(target_app_frame) \n \xa0\xa0\xa0\xa0 robot.MoveJ([ 0 , 0 , 0 , 0 , 10 , - 200 ]) \n \xa0\xa0\xa0\xa0 robot.setPoseFrame(frame1)\xa0\xa0\xa0  \n \xa0\xa0\xa0\xa0 robot.MoveJ(target_app_frame) \n \xa0\xa0\xa0\xa0 for   i  in   range (ntake): \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 TCPi  =   TCP_list[i] \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 robot.setPoseTool(TCPi) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 if   idLeave > nballs_frame2 - 1 : \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 raise   Exception( "No room left to place objects in Table 2" ) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 # calculate target wrt frame1: rotation of 180 about Y is needed since Z and X axis are inverted \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 target  =   transl(frame1_list[idLeave]) * roty(pi) * rotx( 30 * pi / 180 ) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 target_app  =   target * transl( 0 , 0 , - APPROACH) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 idLeave  =   idLeave  +   1 \xa0\xa0\xa0\xa0\xa0\xa0\xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 robot.MoveL(target_app) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 robot.MoveL(target) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 TCP_Off(TCPi, i, frame2) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 robot.MoveL(target_app) \n \xa0 \n \xa0\xa0\xa0\xa0 robot.MoveJ(target_app_frame) \n \xa0 \n # Move home when the robot finishes \n robot.MoveJ([ 0 , 0 , 0 , 0 , 10 , - 200 ]) \n \n', 'tags': '', 'url': 'RoboDK.html'}, {'title': 'About', 'text': 'This is \xa0 https://github.com/mdecourse/cmstemplate \n 目前的 cmsimde 在編輯器下方新增一個 csave 按鈕, 意即 collabrative save, 當動態網際管理系統在多人同時維護登入維護網頁內容時, 編輯各頁面時段, 該頁面可能已經改版, 因此使用 csave 按鈕存檔時, 會導入當下最新的該頁面內容, 並試圖與編輯中的頁面內容進行合併. \n 使用 csave 按鈕存檔無法刪除頁面資料. \n 使用 Edit All 模式, 無法使用 csave 按鈕（尚未測試).', 'tags': '', 'url': 'About.html'}]};