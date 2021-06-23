var tipuesearch = {"pages": [{'title': '主頁', 'text': '個人倉儲: https://github.com/40823114/cd2021.git \n 小組倉儲: https://github.com/40823114/stage3-ag4.git \n 小組網站: https://40823114.github.io/stage3-ag4/content/index.html \n', 'tags': '', 'url': '主頁.html'}, {'title': 'stage1-ag16', 'text': '', 'tags': '', 'url': 'stage1-ag16.html'}, {'title': '題目-1', 'text': 'stage1-ag16 題目：電風扇 動機：因為天氣變熱了 W2:繪製零件 W3:使用Coppeliasim模擬動作並除錯 W4:報告 \n', 'tags': '', 'url': '題目-1.html'}, {'title': 'W2進度', 'text': '各部位零件 \n 風扇 \n \n 網蓋 \n \n 軸 \n \n 馬達 \n \n 底座 \n \n', 'tags': '', 'url': 'W2進度.html'}, {'title': 'W3進度', 'text': '組合 \n \n', 'tags': '', 'url': 'W3進度.html'}, {'title': '製圖過程', 'text': '畫的時候忘記錄 所以用隱藏回放 \n \n 組裝過程忘記錄 所以同心軸是已經處理好的 \n \n', 'tags': '', 'url': '製圖過程.html'}, {'title': '問題修正', 'text': '馬達與底座連接處沒有選取面，頭沒辦法旋轉，所以多加一段圓柱當主軸。 \n \n', 'tags': '', 'url': '問題修正.html'}, {'title': 'stage2-ag9', 'text': '', 'tags': '', 'url': 'stage2-ag9.html'}, {'title': '題目-2', 'text': 'stage2-ag9 題目：旋轉木馬音樂盒 W5:繪製零件 W6~8:使用Coppeliasim模擬動作並除錯 W9:報告 \n 我負責繪製所有零件及組合圖，齒輪為Solidwork內建。 \n', 'tags': '', 'url': '題目-2.html'}, {'title': 'W5進度', 'text': '齒輪箱 \n \n 連桿1 \n \n 連桿2 \n \n', 'tags': '', 'url': 'W5進度.html'}, {'title': 'W6進度', 'text': '輪子 \n \n 連桿軸 \n \n 底座2 \n \n 上主軸2 \n \n', 'tags': '', 'url': 'W6進度.html'}, {'title': 'W7進度', 'text': '底座2更新 \n \n 上主軸2更新 \n \n \n', 'tags': '', 'url': 'W7進度.html'}, {'title': 'W8進度', 'text': '馬 \n \n', 'tags': '', 'url': 'W8進度.html'}, {'title': 'W9進度', 'text': '報告 \n 組合圖沒有錄影 \n 模擬失敗 \n 模擬影片 \n \n', 'tags': '', 'url': 'W9進度.html'}, {'title': '問題整理', 'text': '針對繪圖部分整理。 \n 題目很早就決定好了，但是結構設計參考網路資料後，沒有達到預期的成效。 \n 外型，尺寸拿捏都需要再加強。 \n 結構沒辦法配合CoppeliaSim的物理碰撞做出有效的運動。 \n', 'tags': '', 'url': '問題整理.html'}, {'title': 'stage3-ag4', 'text': '', 'tags': '', 'url': 'stage3-ag4.html'}, {'title': '題目-3', 'text': 'stage3-ag4 \n 題目：仿生八腳獸 \n 小組倉儲: https://github.com/40823114/stage3-ag4.git \n 小組網站: https://40823114.github.io/stage3-ag4/content/index.html \n 組員: \n 張欽堯 40823114\xa0 repo \xa0 site \n 粘晁維 40823121\xa0 repo \xa0 site \n 陳佑杰 40823127\xa0 repo \xa0 site \n 林澤叡 40823135\xa0 repo \xa0 site \n 廖韋博 40823142\xa0 repo \xa0 site \n 柯晉瑚 40823144\xa0 repo \xa0 site \n 蕭宏翔 40823146\xa0 repo \xa0 site \n 韋誠昌 40823148\xa0 repo \xa0 site \n 模擬\n 四腳作動會有問題,所以參考老師的作品,改成八隻腳 \n \n \n 不開碰撞單純作動的話是正常的,但是開碰撞後會像喝醉在地上蠕動 \n \n \n', 'tags': '', 'url': '題目-3.html'}, {'title': '直播內容', 'text': 'https://youtu.be/ELGSM1EytFY \n', 'tags': '', 'url': '直播內容.html'}, {'title': 'RoboDK', 'text': '修改座標和數字 讓他來回 \n \n \n \n \n \n # KMOLab Portable RoboDK pick and place\nfrom robolink import *    # API to communicate with robodk\nfrom robodk import *      # robodk robotics toolbox\n \n# Setup global parameters\nBALL_DIAMETER = 100 # diameter of one ball\nAPPROACH = 100      # approach distance to grab each part, in mm\nnTCPs = 6           # number of TCP\'s in the tool\n \n#----------------------------------------------\n# Function definitions\n \ndef box_calc(BALLS_SIDE=4, BALLS_MAX=None):\n    """Calculate a list of points (ball center) as if the balls were stored in a box"""\n    if BALLS_MAX is None: BALLS_MAX = BALLS_SIDE**3\n    xyz_list = []\n    for h in range(BALLS_SIDE):\n        for i in range(BALLS_SIDE):\n            for j in range(BALLS_SIDE):\n                xyz_list = xyz_list + [[(i+0.5)*BALL_DIAMETER, (j+0.5)*BALL_DIAMETER, (h+0.5)*BALL_DIAMETER]]\n                if len(xyz_list) >= BALLS_MAX:\n                    return xyz_list\n    return xyz_list\n \ndef pyramid_calc(BALLS_SIDE=4):\n    """Calculate a list of points (ball center) as if the balls were place in a pyramid"""\n    #the number of balls can be calculated as: int(BALLS_SIDE*(BALLS_SIDE+1)*(2*BALLS_SIDE+1)/6)\n    BALL_DIAMETER = 100\n    xyz_list = []\n    sqrt2 = 2**(0.5)\n    for h in range(BALLS_SIDE):\n        for i in range(BALLS_SIDE-h):\n            for j in range(BALLS_SIDE-h):\n                height = h*BALL_DIAMETER/sqrt2 + BALL_DIAMETER/2\n                xyz_list = xyz_list + [[i*BALL_DIAMETER + (h+1)*BALL_DIAMETER*0.5, j*BALL_DIAMETER + (h+1)*BALL_DIAMETER*0.5, height]]\n    return xyz_list\n \ndef balls_setup(frame, positions):\n    """Place a list of balls in a reference frame. The reference object (ball) must have been previously copied to the clipboard."""\n    nballs = len(positions)\n    step = 1.0/(nballs - 1)\n    for i in range(nballs):\n        newball = frame.Paste()\n        newball.setName(\'ball \' + str(i)) #set item name\n        newball.setPose(transl(positions[i])) #set item position with respect to parent\n        newball.setVisible(True, False) #make item visible but hide the reference frame\n        newball.Recolor([1-step*i, step*i, 0.2, 1]) #set RGBA color\n \ndef cleanup_balls(parentnodes):\n    """Delete all child items whose name starts with \\"ball\\", from the provided list of parent items."""\n    todelete = []\n    for item in parentnodes:\n        todelete = todelete + item.Childs()\n \n    for item in todelete:\n        if item.Name().startswith(\'ball\'):\n            item.Delete()\n \ndef TCP_On(toolitem, tcp_id):\n    """Attach the closest object to the toolitem Htool pose,\n    furthermore, it will output appropriate function calls on the generated robot program (call to TCP_On)"""\n    toolitem.AttachClosest()\n    toolitem.RDK().RunMessage(\'Set air valve %i on\' % (tcp_id+1))\n    toolitem.RDK().RunProgram(\'TCP_On(%i)\' % (tcp_id+1));\n         \ndef TCP_Off(toolitem, tcp_id, itemleave=0):\n    """Detaches the closest object attached to the toolitem Htool pose,\n    furthermore, it will output appropriate function calls on the generated robot program (call to TCP_Off)"""\n    toolitem.DetachAll(itemleave)\n    toolitem.RDK().RunMessage(\'Set air valve %i off\' % (tcp_id+1))\n    toolitem.RDK().RunProgram(\'TCP_Off(%i)\' % (tcp_id+1));\n \n \n#----------------------------------------------------------\n# The program starts here:\n \n# Any interaction with RoboDK must be done through RDK:\nRDK = Robolink(robodk_path="C:/robodk/bin/RoboDK.exe", robodk_ip=\'127.0.0.1\')\n \n# Turn off automatic rendering (faster)\nRDK.Render(False)\n \n#RDK.Set_Simulation_Speed(500); # set the simulation speed\n \n# Gather required items from the station tree\nrobot = RDK.Item(\'Fanuc M-710iC/50\')\nrobot_tools = robot.Childs()\n#robottool = RDK.Item(\'MainTool\')\nframe1 = RDK.Item(\'Table 1\')\nframe2 = RDK.Item(\'Table 2\')\n \n# Copy a ball as an object (same as CTRL+C)\nballref = RDK.Item(\'reference ball\')\nballref.Copy()\n \n# Run a pre-defined station program (in RoboDK) to replace the two tables\nprog_reset = RDK.Item(\'Replace objects\')\nprog_reset.RunProgram()\n \n# Call custom procedure to remove old objects\ncleanup_balls([frame1, frame2])\n \n# Make a list of positions to place the objects\nframe1_list = pyramid_calc(4)\nframe2_list = pyramid_calc(4)\n \n# Programmatically place the objects with a custom-made procedure\nballs_setup(frame1, frame1_list)\n \n# Delete previously generated tools\nfor tool in robot_tools:\n    if tool.Name().startswith(\'TCP\'):\n        tool.Delete()\n         \n# Calculate tool frames for the suction cup tool of 6 suction cups\nTCP_list = []\nfor i in range(nTCPs):\n    TCPi_pose = transl(0,0,100)*rotz((360/nTCPs)*i*pi/180)*transl(125,0,0)*roty(pi/2)\n    TCPi = robot.AddTool(TCPi_pose, \'TCP %i\' % (i+1))\n    TCP_list.append(TCPi)\n \nTCP_0 = TCP_list[0]\n \n# Turn on automatic rendering\nRDK.Render(True)\n \n# Move balls    \nrobot.setPoseTool(TCP_list[0])\nnballs_frame1 = len(frame1_list)\nnballs_frame2 = len(frame2_list)\nidTake = nballs_frame1 - 1\nidLeave = 0\nidTCP = 0\ntarget_app_frame = transl(2*BALL_DIAMETER, 2*BALL_DIAMETER, 4*BALL_DIAMETER)*roty(pi)*transl(0,0,-APPROACH)\n \nwhile idTake >= 0:\n    # ------------------------------------------------------------------\n    # first priority: grab as many balls as possible\n    # the tool is empty at this point, so take as many balls as possible (up to a maximum of 6 -> nTCPs)\n    ntake = min(nTCPs, idTake + 1)\n \n    # approach to frame 1\n    robot.setPoseFrame(frame1)\n    robot.setPoseTool(TCP_0)\n    robot.MoveJ([0,0,0,0,10,-200])\n    robot.MoveJ(target_app_frame)\n \n    # grab ntake balls from frame 1\n    for i in range(ntake):\n        TCPi = TCP_list[i]\n        robot.setPoseTool(TCPi)\n        # calculate target wrt frame1: rotation about Y is needed since Z and X axis are inverted\n        target = transl(frame1_list[idTake])*roty(pi)*rotx(30*pi/180)\n        target_app = target*transl(0,0,-APPROACH)\n        idTake = idTake - 1       \n        robot.MoveL(target_app)\n        robot.MoveL(target)\n        TCP_On(TCPi, i)\n        robot.MoveL(target_app)\n  \n    # ------------------------------------------------------------------\n    # second priority: unload the tool     \n    # approach to frame 2 and place the tool balls into table 2\n    robot.setPoseTool(TCP_0)\n    robot.MoveJ(target_app_frame)\n    robot.MoveJ([0,0,0,0,10,-200])\n    robot.setPoseFrame(frame2)    \n    robot.MoveJ(target_app_frame)\n    for i in range(ntake):\n        TCPi = TCP_list[i]\n        robot.setPoseTool(TCPi)\n        if idLeave > nballs_frame2-1:\n            raise Exception("No room left to place objects in Table 2")\n         \n        # calculate target wrt frame1: rotation of 180 about Y is needed since Z and X axis are inverted\n        target = transl(frame2_list[idLeave])*roty(pi)*rotx(30*pi/180)\n        target_app = target*transl(0,0,-APPROACH)\n        idLeave = idLeave + 1       \n        robot.MoveL(target_app)\n        robot.MoveL(target)\n        TCP_Off(TCPi, i, frame2)\n        robot.MoveL(target_app)\n \n    robot.MoveJ(target_app_frame)\n \n# Move home when the robot finishes\nrobot.MoveJ([0,0,0,0,10,-200])\n \n \n \n# Gather required items from the station tree\nrobot = RDK.Item(\'Fanuc M-710iC/50\')\nrobot_tools = robot.Childs()\n#robottool = RDK.Item(\'MainTool\')\nframe1 = RDK.Item(\'Table 1\')\nframe2 = RDK.Item(\'Table 2\')\n \n \n \n# Call custom procedure to remove old objects\ncleanup_balls([frame1 , frame2])\n \n \n# Make a list of positions to place the objects\nframe1_list = pyramid_calc(4)\nframe2_list = pyramid_calc(4)\n \n# Programmatically place the objects with a custom-made procedure\nballs_setup(frame2, frame2_list)\n \n# Delete previously generated tools\nfor tool in robot_tools:\n    if tool.Name().startswith(\'TCP\'):\n        tool.Delete()\n         \n# Calculate tool frames for the suction cup tool of 6 suction cups\nTCP_list = []\nfor i in range(nTCPs):\n    TCPi_pose = transl(0,0,100)*rotz((360/nTCPs)*i*pi/180)*transl(125,0,0)*roty(pi/2)\n    TCPi = robot.AddTool(TCPi_pose, \'TCP %i\' % (i+1))\n    TCP_list.append(TCPi)\n \nTCP_0 = TCP_list[0]\n \n \n \n# Move balls    \nrobot.setPoseTool(TCP_list[0])\nnballs_frame2 = len(frame2_list)\nnballs_frame1 = len(frame1_list)\nidTake = nballs_frame2 - 1\nidLeave = 0\nidTCP = 0\ntarget_app_frame = transl(2*BALL_DIAMETER, 2*BALL_DIAMETER, 4*BALL_DIAMETER)*roty(pi)*transl(0,0,-APPROACH)\n \nwhile idTake >= 0:\n    # ------------------------------------------------------------------\n    # first priority: grab as many balls as possible\n    # the tool is empty at this point, so take as many balls as possible (up to a maximum of 6 -> nTCPs)\n    ntake = min(nTCPs, idTake + 1)\n \n    # approach to frame 1\n    robot.setPoseFrame(frame2)\n    robot.setPoseTool(TCP_0)\n    robot.MoveJ([0,0,0,0,10,-200])\n    robot.MoveJ(target_app_frame)\n \n    # grab ntake balls from frame 1\n    for i in range(ntake):\n        TCPi = TCP_list[i]\n        robot.setPoseTool(TCPi)\n        # calculate target wrt frame1: rotation about Y is needed since Z and X axis are inverted\n        target = transl(frame2_list[idTake])*roty(pi)*rotx(30*pi/180)\n        target_app = target*transl(0,0,-APPROACH)\n        idTake = idTake - 1       \n        robot.MoveL(target_app)\n        robot.MoveL(target)\n        TCP_On(TCPi, i)\n        robot.MoveL(target_app)\n  \n    # ------------------------------------------------------------------\n    # second priority: unload the tool     \n    # approach to frame 2 and place the tool balls into table 2\n    robot.setPoseTool(TCP_0)\n    robot.MoveJ(target_app_frame)\n    robot.MoveJ([0,0,0,0,10,-200])\n    robot.setPoseFrame(frame1)    \n    robot.MoveJ(target_app_frame)\n    for i in range(ntake):\n        TCPi = TCP_list[i]\n        robot.setPoseTool(TCPi)\n        if idLeave > nballs_frame2-1:\n            raise Exception("No room left to place objects in Table 2")\n         \n        # calculate target wrt frame1: rotation of 180 about Y is needed since Z and X axis are inverted\n        target = transl(frame1_list[idLeave])*roty(pi)*rotx(30*pi/180)\n        target_app = target*transl(0,0,-APPROACH)\n        idLeave = idLeave + 1       \n        robot.MoveL(target_app)\n        robot.MoveL(target)\n        TCP_Off(TCPi, i, frame2)\n        robot.MoveL(target_app)\n \n    robot.MoveJ(target_app_frame)\n \n# Move home when the robot finishes\nrobot.MoveJ([0,0,0,0,10,-200]) \n \n', 'tags': '', 'url': 'RoboDK.html'}, {'title': 'W13~W14', 'text': '', 'tags': '', 'url': 'W13~W14.html'}, {'title': '會議記錄', 'text': '\n', 'tags': '', 'url': '會議記錄.html'}, {'title': 'task1', 'text': '\n stage3_ag1 |  website  |  github \n 40823131 | Website: 40823131  | Repository: 40823131  | Group Website: 40823131 \n 40823112 | Website: 40823112  | Repository: 40823112  | Group Website: 40823112 \n 40823123 | Website: 40823123  | Repository: 40823123  | Group Website: 40823123 \n 40823145 | Website: 40823145  | Repository: 40823145  | Group Website: 40823145 \n 40823136 | Website: 40823136  | Repository: 40823136  | Group Website: 40823136 \n 40823109 | Website: 40823109  | Repository: 40823109  | Group Website: 40823109 \n 40823116 | Website: 40823116  | Repository: 40823116  | Group Website: 40823116 \n 40823108 | Website: 40823108  | Repository: 40823108  | Group Website: 40823108 \n stage3_ag2 |  website  |  github \n 40823151 | Website: 40823151  | Repository: 40823151  | Group Website: 40823151 \n 40623121 | Website: 40623121  | Repository: 40623121  | Group Website: 40623121 \n 40871106 | Website: 40871106  | Repository: 40871106  | Group Website: 40871106 \n 40823102 | Website: 40823102  | Repository: 40823102  | Group Website: 40823102 \n 40823104 | Website: 40823104  | Repository: 40823104  | Group Website: 40823104 \n 40823106 | Website: 40823106  | Repository: 40823106  | Group Website: 40823106 \n 40823101 | Website: 40823101  | Repository: 40823101  | Group Website: 40823101 \n 40823132 | Website: 40823132  | Repository: 40823132  | Group Website: 40823132 \n stage3_ag3 |  website  |  github \n 40823119 | Website: 40823119  | Repository: 40823119  | Group Website: 40823119 \n 40823150 | Website: 40823150  | Repository: 40823150  | Group Website: 40823150 \n 40823103 | Website: 40823103  | Repository: 40823103  | Group Website: 40823103 \n 40823107 | Website: 40823107  | Repository: 40823107  | Group Website: 40823107 \n 40523252 | Website: 40523252  | Repository: 40523252  | Group Website: 40523252 \n 40823154 | Website: 40823154  | Repository: 40823154  | Group Website: 40823154 \n stage3_ag4 |  website  |  github \n 40823142 | Website: 40823142  | Repository: 40823142  | Group Website: 40823142 \n 40823144 | Website: 40823144  | Repository: 40823144  | Group Website: 40823144 \n 40823127 | Website: 40823127  | Repository: 40823127  | Group Website: 40823127 \n 40823148 | Website: 40823148  | Repository: 40823148  | Group Website: 40823148 \n 40823121 | Website: 40823121  | Repository: 40823121  | Group Website: 40823121 \n 40823135 | Website: 40823135  | Repository: 40823135  | Group Website: 40823135 \n 40823114 | Website: 40823114  | Repository: 40823114  | Group Website: 40823114 \n 40823146 | Website: 40823146  | Repository: 40823146  | Group Website: 40823146 \n stage3_ag5 |  website  |  github \n 40823111 | Website: 40823111  | Repository: 40823111  | Group Website: 40823111 \n 40823115 | Website: 40823115  | Repository: 40823115  | Group Website: 40823115 \n 40823128 | Website: 40823128  | Repository: 40823128  | Group Website: 40823128 \n 40823120 | Website: 40823120  | Repository: 40823120  | Group Website: 40823120 \n 40823140 | Website: 40823140  | Repository: 40823140  | Group Website: 40823140 \n 40823124 | Website: 40823124  | Repository: 40823124  | Group Website: 40823124 \n 40823139 | Website: 40823139  | Repository: 40823139  | Group Website: 40823139 \n 40823126 | Website: 40823126  | Repository: 40823126  | Group Website: 40823126 \n stage3_ag6 |  website  |  github \n 40823152 | Website: 40823152  | Repository: 40823152  | Group Website: 40823152 \n 40823110 | Website: 40823110  | Repository: 40823110  | Group Website: 40823110 \n 40823122 | Website: 40823122  | Repository: 40823122  | Group Website: 40823122 \n 40823125 | Website: 40823125  | Repository: 40823125  | Group Website: 40823125 \n 40823117 | Website: 40823117  | Repository: 40823117  | Group Website: 40823117 \n 40823129 | Website: 40823129  | Repository: 40823129  | Group Website: 40823129 \n 40823149 | Website: 40823149  | Repository: 40823149  | Group Website: 40823149 \n 40823153 | Website: 40823153  | Repository: 40823153  | Group Website: 40823153 \n 參考40823131 task1 \n # open file, default is read mode, since txt content no chinese char\n# no encoding = "UTF-8" is needed\nwith open("stage3_2a.txt") as fh:\n    # readlines will read into the whole line and put into list format\n    # has \\n at the end of each line\n    data = fh.readlines()\n    data = [a.replace(\'4823122\',\'40823122\') for a in data]\n    data = [c.replace(\'\\t\\t\\t\\t\',\'\') for c in data]\n    print(data)\n#print(len(data))\nfor i in range(len(data)):\n    group = data[i].rstrip("\\n").split("\\t")\n    print(\'<p>\'+group[0]+\' | <a href="https://\'+group[1]+\'.github.io/stage3-ag\'+group[0][9]+\'">website</a> | <a href="https://github.com/\'+group[2]+\'/stage3-ag\'+group[0][9]+\'">github</a></p>\')\n# the following will use group data to generate needed html\n\n    for j in range(2,18,2):\n        try:\n            print(\'<p>\'+group[j]+\' | Website:\'+\'<a href="https://\'+group[j]+\'.github.io/cd2021\'+\'">\'+group[j]+\'</a>\'+\' | Repository:\'+\'<a href="https://github.com/\'+group[j]+\'/cd2021\'+\'">\'+group[j]+\'</a>\'+\' | Group Website:\'+\'<a href="https://\'+group[j]+\'.github.io/stage3-ag\'+group[0][9]+\'">\'+group[j]+\'</a></p>\')\n        except:\n            continue \n \n', 'tags': '', 'url': 'task1.html'}, {'title': 'task2', 'text': '\n import sim as vrep\nimport sys\n# child threaded script: \n#simExtRemoteApiStart(19999)\n \nvrep.simxFinish(-1)\n \nclientID = vrep.simxStart(\'127.0.0.1\', 19999, True, True, 5000, 5)\n \nif clientID!= -1:\n    print("Connected to remote server")\nelse:\n    print(\'Connection not successful\')\n    sys.exit(\'Could not connect\')\n \nerrorCode,main_handle=vrep.simxGetObjectHandle(clientID,\'main\',vrep.simx_opmode_oneshot_wait)\n \n\n \nif errorCode == -1:\n    print(\'Can not find main_handle\')\n    sys.exit()\n \nerrorCode=vrep.simxSetJointTargetVelocity(clientID,main_handle,20, vrep.simx_opmode_oneshot_wait)\n \n 檔案連結: https://drive.google.com/file/d/1rB2eq-nzC3aqGOcemEeVpwfdjD2cbrZf/view?usp=sharing \n', 'tags': '', 'url': 'task2.html'}, {'title': 'W15', 'text': "Inverse kinematics for a 2-joint robot arm using geometry \n \n \n We saw this simple two-link robot in the previous lecture about forward kinematics. \n 我們在上一堂關於正向運動學的講座中看到了這個簡單的雙連桿機構。 \n The tooltip pose of the robot is simply described by two numbers, coordinates x and y is relative to the world coordinate system. \n 這個連桿機構是簡單用兩個數字來描述的，相對於絕對座標的ｘ和ｙ。 \n So, the problem here is that given x and y, we want to determine the joined angles, q1 and q2. \n 所以這裡的問題是當我們有了 x 和 y，我們要求出連接角 q1 和 q2。 \n The solution that we’re going to follow in this particular section is a geometric one. \n 幾何是我們在這特定部分要使用的解決方法。 \n We're going to start with a simple piece of construction. \n 我們會先從一個簡單的結構開始。 \n We’re going to overlay the red triangle on top of our robot. \n 我們要覆蓋紅色三角形在我們的機構頂部 。 \n We know that the end point coordinate is x, y, so the vertical height of the triangle is y, the horizontal width is x. \n 我們知道端點座標為x和y，因此三角形的垂直高度為y，水平寬度為x。 \n And, using Pythagoras theorem, we can write r squared equals x squared plus y squared. \n 並且，利用畢氏定理，我們可得出r的平方 = x的平方 + y的平方。 \n So far, so easy. \n 到目前為止，都很容易。 \n Now, we’re going to look at this triangle highlighted here in red and we want to determine \n the angle alpha. \n 現在我們來看此處用紅色顯示的三角形，並且確定出我們想要的角度α 。 \n In order to do that, we need to use the cosine rule. \n 為了做到這點，我們須使用餘弦定理。 \n And, if you’re a little rusty on the cosine rule, here is a bit of a refresher. \n 如果你對餘弦定理有點不熟悉，這裡有一些複習資料。 \n We have an arbitrary triangle. \n 我們這邊有一個任意的三角形。 \n We don’t have any right angles in it and we’re going to label the length of this edge as A and the angle opposite that edge, we’re going to label as little a. \n 三角形中沒有任何直角，我們把這條邊的長度標為A，與這條邊相對的角，我們標記為a。 \n And, we do the same for this edge and this angle, and this edge and this angle. \n 並且我們對另兩邊的邊及角做相同的事。 \n So, all together, the sides are labelled capitals A, B and C, and the angles are labelled little a, little b, and little c. \n 因此，所有的邊都被標記為A,B,C，而角都被標記為a,b,c。 \n So, the cosine rule is simply this relationship here. \n 餘弦定理在這裡便以此種簡單的關係表示。 \n It’s a bit like Pythagoras’ theorem except for this extra term on the end with the cos a in it. \n 它有點類似於畢氏定理，只是在最後多了一個帶cos a的項。 \n Now, let’s apply the cosine rule to the particular triangle we looked at a moment ago. \n 現在，讓我們把餘弦定理用於剛才看到的那個特定三角形上。 \n It’s pretty straightforward to write down this particular relationship. \n 可以很直接地寫下此種特殊關係。 \n We can isolate the term cos alpha which gives us the angle alpha that we’re interested in. \n 我們可以將我們所感興趣的α角求出，需將給定的cos\xa0 α 項分離出來。 \n And, it’s defined in terms of the constant link lengths, A1 and A2 and the position of the end effector, x and y. \n 且它是以恆定的連桿長度A1及A2以及末端執行器位置x與y來定義的。 \n We can write this simple relationship between the angles alpha and q2. \n 我們可以寫出此種於α角和q2之間的簡單關係。 \n And, we know from the shape of the cosine function that cos of q2 must be equal to negative of cos alpha. \n 而且，我們從餘弦函數的形狀得知，cos q2須等於 -cos\xa0 α。 \xa0 \n This time, let’s just write an expression for the cosine of the joined angle q2. \n 這次，讓我們只寫出關於連接角q2的餘弦表達式。 \n Now, we’re going to draw yet another red triangle and we’re going apply some simple trigonometry here. \n 現在，我們要再畫一個紅色三角形，並在這使用一些簡單的三角函數。 \n If we know q2, then we know this length and this length of the red triangle. \n 如果我們知道了q2，那我們便可得紅色三角形中q2的對邊長與鄰邊長。 \n We can write this relationship for the sine of the joined angle q2. \n 我們可以將這種關係寫為連接角q2的正弦。 \n Now, we can consider this bigger triangle whose angle is beta and this side length of this triangle is given here in blue. \n 現在我們可以考慮更大的三角形，其角度為β，這個三角形的邊長用藍色表示。 \n And, the length of the other side of the triangle is this. \n 且此三角形的另一邊長是這樣表示的。 \n So, now we can write an expression for the angle beta in terms of these parameters here. \n 所以，現在我們可以用這些參數來寫出一個β角的表達式。 \n Going back to the red triangle that we drew earlier, we can establish a relationship between q1 and the angle beta. \n 回到稍早前我們畫的紅色三角形，我們可以在q1和β角之間建立一種關係。 \n Introduce yet another angle, this one gamma and we can write a relationship between the angle gamma and the tooltip coordinates x and y. \n 引入另一個角度 γ，我們可寫出γ角和工具軟件座標x和y之間的關係。 \n Now, we can write a simple relationship between the angles that we’ve constructed, gamma and beta and the joined angle we’re interested in which is q1. \n 現在，我們可以用建構出的角度γ,β來寫出γ角和β角與欲求之連接角q1之間的簡單關係。 \n And, the total relationship looks something like this. \n 並且整體關係看起來像這樣。 \n Quite a complex relationship, it gives us the angle of joined one, that’s q1 in terms of the end effector coordinates y and x, and a bunch of constants, a1 and a2, and it’s also a function of the second joint angle, q2. \n 此為相當複雜的一個關係，它提供了第一關節角q1與端點坐標y和x，以及一堆常數a1和a2，並且它也是第二關節角q2的函數。 \n So, let’s summarize what it is that we have derived here. \n 所以，讓我們總結一下在這裡得出的結論。 \n We have an expression for the cosine of q2 and we have an expression for q1. \n 我們有一個q2的餘弦表達式，和一個q1表達式。 \n Now, the cosine function is symmetrical about 0. \n 現在，餘弦函數在0時為對稱的。 \n So, if we know the value of the cosine of q2, then there are two possible solutions a positive angle and a negative angle. \n 所以，假如我們得知cosq2，那它便會有正角與負角兩種解。 \n We’re going to explicitly choose the positive angle. Which means that I can write this expression here. \n 在這裡明確的選擇正角，這意味著我可以在此處寫這個表達式。 \n And now, we have what we call the inverse kinematic solution for this two-link robot. \n 現在我們有了解決雙連桿機構的逆向運動學函式。 \n We have an expression for the two joined angles, q1 and q2 in terms of the end effector pose x and y, and a bunch of constants. \n 我們有一個對連接角q1和q2的表達式，其與末端執行器構成的x和y和一大堆常數有關。 \n You notice that the two equations are not independent. \n 你會注意到這兩個方程式並不獨立。 \n The equation for q1, in fact, depends on the solution for q2. \n 實際上，q1的方程式取決於q2的解。 \n In this case, q2 is negative and we’re going to write the solution for q2 with a negative sign in front of the inverse cosine. \n 在這種情況下，q2為負，因此我們要在反餘弦前加上負號來寫出q2的解。 \n Now, we need to solve for q1, so we’re going to introduce this particular red triangle, the angle beta that we solved previously, and the angle gamma which is defined in terms of y and x. \n 現在我們要求出q1的解，所以我們要引入這個特定的紅色三角形，並用之前得出的β角以及用y和x定義出的γ角。 \n Now, we write a slightly different relationship between q1, gamma and beta, different to what we had before. \n 現在，我們在q1、γ和β之間寫了一個與之前稍微不同的關係。 \n There’s a change of sign involved. \n 這涉及到符號的變化。 \n Then, we can substitute all that previous equation and come up with this expression for q1. \n 然後將先前所有的方程代入，可得出這個q1的表達式。 \n Again, there is a change of sign here. \n 同樣地，這裡也有一個符號的變化。 \n Previously, this was a negative sign. \n 在之前的式子裡，這裡是負號。 \n And, here in summary form is the solution for the inverse kinematics of our two-link robot when it is in this particular configuration, where q2 is negative. \n 這是我們使用逆向運動學於雙連桿機構在此特定構造下的解，其中q2為負值 \n Let’s compare the two solutions, the case where q2 is positive and the case where q2 is negative. \n 讓我們在q2為正以及q2為負的情況下進行兩種解法的比較。 \n \n", 'tags': '', 'url': 'W15.html'}, {'title': 'W16', 'text': '\n \n \n \n 檔案連結: https://drive.google.com/file/d/1LTV1PTRzKuWk0qn2jBUxCcfbIQ14v11w/view?usp=sharing \n onshape: https://cad.onshape.com/documents/83b2b078218e306afd36b2c1/w/6e9c318a7449eeea610810f7/e/467f8494e660346b5fdebacc \n', 'tags': '', 'url': 'W16.html'}, {'title': 'About', 'text': 'This is \xa0 https://github.com/mdecourse/cmstemplate \n 目前的 cmsimde 在編輯器下方新增一個 csave 按鈕, 意即 collabrative save, 當動態網際管理系統在多人同時維護登入維護網頁內容時, 編輯各頁面時段, 該頁面可能已經改版, 因此使用 csave 按鈕存檔時, 會導入當下最新的該頁面內容, 並試圖與編輯中的頁面內容進行合併. \n 使用 csave 按鈕存檔無法刪除頁面資料. \n 使用 Edit All 模式, 無法使用 csave 按鈕（尚未測試). \n', 'tags': '', 'url': 'About.html'}]};