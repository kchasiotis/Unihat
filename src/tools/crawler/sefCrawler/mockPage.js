const html = `
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Σ.Ε.Φ. >> Αρχική</title>
        <!-- Tell the browser to be responsive to screen width -->
        <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
        <!-- Bootstrap 3.3.5 -->
        <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
        <!-- Font Awesome -->
        <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"> -->
        <link rel="stylesheet" href="bootstrap/extraFontsCss/font-awesome.min.css">
        <!-- Ionicons -->
        <!-- <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"> -->
        <link rel="stylesheet" href="bootstrap/extraFontsCss/ionicons.min.css">
        <!-- DataTables -->
        <link rel="stylesheet" href="plugins/datatables/jquery.dataTables.css">
        <link rel="stylesheet" href="plugins/datatables/dataTables.bootstrap.css">
        <!-- Theme style -->
        <link rel="stylesheet" href="dist/css/AdminLTE.min.css">
        <!-- AdminLTE Skins. Choose a skin from the css/skins
    folder instead of downloading all of them to reduce the load. -->
        <link rel="stylesheet" href="dist/css/skins/_all-skins.min.css">
        <style type="text/css">
      .hiddenDate{
        display:none;
      }

      tr.group,
      tr.group:hover {
        background-color: #ddd !important;
      }

      .myTable{
        table-layout: fixed !important;
        /*word-wrap:break-word;*/
      }
      
    </style>
        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
      
    </head>
    <!-- ADD THE CLASS layout-top-nav TO REMOVE THE SIDEBAR. -->
    <body class="hold-transition skin-blue layout-top-nav">
        <div class="wrapper">
            <header class="main-header">
                <nav class="navbar navbar-static-top">
                    <div class="container">
                        <div class="navbar-header">
                            <a href="http://www.math.aegean.gr" class="navbar-brand" style="margin-top: -10px !important;">
                                <b>Πανεπιστήμιο Αιγαίου</b>
                                <br>Τμήμα Μαθηματικών
                            </a>
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
                                <i class="fa fa-bars"></i>
                            </button>
                        </div>
                        <!-- Collect the nav links, forms, and other content for toggling -->
                        <div class="collapse navbar-collapse pull-left" id="navbar-collapse">
                            <ul class="nav navbar-nav">
                                <li class="active">
                                    <a href="main.php">Αναλυτική
                                        <span class="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="request.php">Αιτήσεις</a>
                                </li>
                                <li>
                                    <a href="courses.php">Δηλώσεις</a>
                                </li>
                                <!--                 <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Δηλώσεις <span class="caret"></span></a><ul class="dropdown-menu" role="menu"><li><a href="#">Νέα Δήλωση</a></li><li><a href="#">Διαγραφή Δήλωσης</a></li><li><a href="#">Εκτύπωση Δήλωσης</a></li>
                  </ul>
                </li> -->
            <li>
                <a href="links.php">Συνδέσεις</a>
            </li>
            <li>
                <a href="exit.php">Αποσύνδεση</a>
            </li>
        </ul>
    </div>
    <!-- /.navbar-collapse -->
    <!-- Navbar Right Menu -->
    <div class="navbar-custom-menu" style="margin-top: 10px; font-size: 14px; font-weight: bold; color: #f7e9c3; text-align: center;">
              Εισαγωγική Κατεύθυνση: 
        <br/>"Στατιστικής & Αναλογιστικών Χρηματοοικονομικών Μαθηματικών"
    </div>
    <!-- /.navbar-custom-menu -->
          
</div>
<!-- /.container-fluid -->
        
</nav>
</header>
<!-- Full Width Column -->
<div class="content-wrapper">
    <div class="container">
        <!--           <section class="content-header"><h1>Αίτηση</h1></section> -->
        <!-- Main content -->
        <section class="content">
            <!-- Custom Tabs -->
            <div class="nav-tabs-custom">
                <ul class="nav nav-tabs">
                    <li class="active">
                        <a href="#tab_1" data-toggle="tab">Αναλυτική</a>
                    </li>
                    <li>
                        <a href="#tab_2" data-toggle="tab">Δηλώσεις μαθημάτων</a>
                    </li>
                    <li>
                        <a href="#tab_3" data-toggle="tab">Περασμένα</a>
                    </li>
                </ul>
                <div class="tab-content">
                    <div class="tab-pane active" id="tab_1">
                        <div class="box">
                            <div class="box-body table-responsive no-padding">
                                <table id="example1" class="table table-bordered table-striped" style="font-size: 13px; ">
                                    <thead>
                                        <tr>
                                            <th class="hidden-xs">Κωδικός</th>
                                            <th>Τίτλος Μαθήματος</th>
                                            <th class="hidden-xs">Ημ/νία δήλωσης</th>
                                            <th>Ημ/νια Εξέτ</th>
                                            <th>Βαθμός</th>
                                            <th class="hidden-xs">Χαρακτηρισμός</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class='hidden-xs'>331-2005</td>
                                            <td>Απειροστικός Λογισμός ΙΙ</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2016-09-01 00:00:00</span>01.09.2016
                                            </td>
                                            <td>
                                                <span class='hiddenDate'>2016-09-29 00:00:00</span>29.09.2016
                                            </td>
                                            <td>10</td>
                                            <td class='hidden-xs'>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-2806</td>
                                            <td>Μικροοικονομική Θεωρία I</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2016-09-01 00:00:00</span>01.09.2016
                                            </td>
                                            <td>
                                                <span class='hiddenDate'>2016-09-28 00:00:00</span>28.09.2016
                                            </td>
                                            <td>10</td>
                                            <td class='hidden-xs'>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-4654</td>
                                            <td>Πτυχιακή Εργασία</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2016-03-15 00:00:00</span>15.03.2016
                                            </td>
                                            <td>
                                                <span class='hiddenDate'>2016-06-29 00:00:00</span>29.06.2016
                                            </td>
                                            <td>10</td>
                                            <td class='hidden-xs'>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-9204</td>
                                            <td>Στατιστικά Πακέτα και Ανάλυση Δεδομένων</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2016-03-15 00:00:00</span>15.03.2016
                                            </td>
                                            <td>
                                                <span class='hiddenDate'>2016-06-28 00:00:00</span>28.06.2016
                                            </td>
                                            <td>10</td>
                                            <td class='hidden-xs'>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>311-2002</td>
                                            <td>Κρυπτογραφία</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2016-03-15 00:00:00</span>15.03.2016
                                            </td>
                                            <td>
                                                <span class='hiddenDate'></span>
                                            </td>
                                            <td></td>
                                            <td class='hidden-xs'>Δεν δόθηκε</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>311-0247</td>
                                            <td>Γενική Τοπολογία</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2016-03-15 00:00:00</span>15.03.2016
                                            </td>
                                            <td>
                                                <span class='hiddenDate'></span>
                                            </td>
                                            <td></td>
                                            <td class='hidden-xs'>Δεν δόθηκε</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>311-2451</td>
                                            <td>Στοιχειώδης Θεωρία Συνόλων</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2016-03-15 00:00:00</span>15.03.2016
                                            </td>
                                            <td>
                                                <span class='hiddenDate'></span>
                                            </td>
                                            <td></td>
                                            <td class='hidden-xs'>Δεν δόθηκε</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>311-2851</td>
                                            <td>Ιστορία Ευκλείδειων και μη Ευκλείδειων Γεωμετριών</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2016-03-15 00:00:00</span>15.03.2016
                                            </td>
                                            <td>
                                                <span class='hiddenDate'></span>
                                            </td>
                                            <td></td>
                                            <td class='hidden-xs'>Δεν δόθηκε</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>321-11100</td>
                                            <td>Τεχνολογίες και Εφαρμογές Ηλεκτρονικής Διακυβέρνησης</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2016-03-15 00:00:00</span>15.03.2016
                                            </td>
                                            <td>
                                                <span class='hiddenDate'></span>
                                            </td>
                                            <td></td>
                                            <td class='hidden-xs'>Δεν δόθηκε</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>321-2104</td>
                                            <td>Αντικειμενοστραφης Προγραμματισμός Ι</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2016-03-15 00:00:00</span>15.03.2016
                                            </td>
                                            <td>
                                                <span class='hiddenDate'></span>
                                            </td>
                                            <td></td>
                                            <td class='hidden-xs'>Δεν δόθηκε</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>321-3404</td>
                                            <td>Ασφάλεια Πληροφοριακών & Επικοινωνιακών Συστημάτων</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2016-03-15 00:00:00</span>15.03.2016
                                            </td>
                                            <td>
                                                <span class='hiddenDate'></span>
                                            </td>
                                            <td></td>
                                            <td class='hidden-xs'>Δεν δόθηκε</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>321-3453</td>
                                            <td>Τηλεπικοινωνίες</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2016-03-15 00:00:00</span>15.03.2016
                                            </td>
                                            <td>
                                                <span class='hiddenDate'></span>
                                            </td>
                                            <td></td>
                                            <td class='hidden-xs'>Δεν δόθηκε</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>321-3603</td>
                                            <td>Τεχνητή Νοημοσύνη</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2016-03-15 00:00:00</span>15.03.2016
                                            </td>
                                            <td>
                                                <span class='hiddenDate'></span>
                                            </td>
                                            <td></td>
                                            <td class='hidden-xs'>Δεν δόθηκε</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>321-9352</td>
                                            <td>Ψηφιακή Επεξεργασία Εικόνας</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2016-03-15 00:00:00</span>15.03.2016
                                            </td>
                                            <td>
                                                <span class='hiddenDate'></span>
                                            </td>
                                            <td></td>
                                            <td class='hidden-xs'>Δεν δόθηκε</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-2656</td>
                                            <td>Αριθμητική Ανάλυση</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2016-03-15 00:00:00</span>15.03.2016
                                            </td>
                                            <td>
                                                <span class='hiddenDate'></span>
                                            </td>
                                            <td></td>
                                            <td class='hidden-xs'>Δεν δόθηκε</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-2900</td>
                                            <td>Ανάλυση Ι</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2016-03-15 00:00:00</span>15.03.2016
                                            </td>
                                            <td>
                                                <span class='hiddenDate'></span>
                                            </td>
                                            <td></td>
                                            <td class='hidden-xs'>Δεν δόθηκε</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-4555</td>
                                            <td>Ανάλυση Επιβίωσης</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2016-03-15 00:00:00</span>15.03.2016
                                            </td>
                                            <td>
                                                <span class='hiddenDate'></span>
                                            </td>
                                            <td></td>
                                            <td class='hidden-xs'>Δεν δόθηκε</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-9252</td>
                                            <td>Περιβαλλοντικά Συστήματα με Εφαρμογές στη Στατιστική</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2016-03-15 00:00:00</span>15.03.2016
                                            </td>
                                            <td>
                                                <span class='hiddenDate'></span>
                                            </td>
                                            <td></td>
                                            <td class='hidden-xs'>Δεν δόθηκε</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-9600</td>
                                            <td>Συναρτησιακή Ανάλυση</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2016-03-15 00:00:00</span>15.03.2016
                                            </td>
                                            <td>
                                                <span class='hiddenDate'></span>
                                            </td>
                                            <td></td>
                                            <td class='hidden-xs'>Δεν δόθηκε</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-3707</td>
                                            <td>Ανάλυση Κατηγορικών Δεδομένων</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2015-11-30 00:00:00</span>30.11.2015
                                            </td>
                                            <td>
                                                <span class='hiddenDate'>2016-02-17 00:00:00</span>17.02.2016
                                            </td>
                                            <td>7.5</td>
                                            <td class='hidden-xs'>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>311-2303</td>
                                            <td>Διδακτική Ευκλείδειας Γεωμετρίας</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2015-11-30 00:00:00</span>30.11.2015
                                            </td>
                                            <td>
                                                <span class='hiddenDate'></span>
                                            </td>
                                            <td></td>
                                            <td class='hidden-xs'>Δεν δόθηκε</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>311-2353</td>
                                            <td>Νέες Τεχνολογίες στην Εκπαίδευση</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2015-11-30 00:00:00</span>30.11.2015
                                            </td>
                                            <td>
                                                <span class='hiddenDate'></span>
                                            </td>
                                            <td></td>
                                            <td class='hidden-xs'>Δεν δόθηκε</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>321-2304_Π</td>
                                            <td>Λειτουργία των Επιχειρήσεων και Πληροφοριακών Συστημάτων</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2015-11-30 00:00:00</span>30.11.2015
                                            </td>
                                            <td>
                                                <span class='hiddenDate'></span>
                                            </td>
                                            <td></td>
                                            <td class='hidden-xs'>Δεν δόθηκε</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-3255</td>
                                            <td>Δειγματοληψία</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2015-11-30 00:00:00</span>30.11.2015
                                            </td>
                                            <td>
                                                <span class='hiddenDate'></span>
                                            </td>
                                            <td></td>
                                            <td class='hidden-xs'>Δεν δόθηκε</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-3655</td>
                                            <td>Γραμμικά και Γενικευμένα Γραμμικά Μοντέλα</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2015-11-30 00:00:00</span>30.11.2015
                                            </td>
                                            <td>
                                                <span class='hiddenDate'></span>
                                            </td>
                                            <td></td>
                                            <td class='hidden-xs'>Δεν δόθηκε</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>311-0186</td>
                                            <td>Διακριτά Μαθηματικά</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2015-11-30 00:00:00</span>30.11.2015
                                            </td>
                                            <td>
                                                <span class='hiddenDate'></span>
                                            </td>
                                            <td></td>
                                            <td class='hidden-xs'>Δεν δόθηκε</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-4105</td>
                                            <td>Βιοστατιστικη</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2015-11-30 00:00:00</span>30.11.2015
                                            </td>
                                            <td>
                                                <span class='hiddenDate'></span>
                                            </td>
                                            <td></td>
                                            <td class='hidden-xs'>Δεν δόθηκε</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-7102</td>
                                            <td>Απαραμετρική Στατιστική</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2015-11-30 00:00:00</span>30.11.2015
                                            </td>
                                            <td>
                                                <span class='hiddenDate'></span>
                                            </td>
                                            <td></td>
                                            <td class='hidden-xs'>Δεν δόθηκε</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-7023</td>
                                            <td>Μερικές Διαφορικές Εξισώσεις</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2015-11-30 00:00:00</span>30.11.2015
                                            </td>
                                            <td>
                                                <span class='hiddenDate'></span>
                                            </td>
                                            <td></td>
                                            <td class='hidden-xs'>Δεν δόθηκε</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-5004</td>
                                            <td>Επιχειρησιακή Ερευνά (Γραμμικός και Δυναμικός Προγραμματισμός)</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2015-11-30 00:00:00</span>30.11.2015
                                            </td>
                                            <td>
                                                <span class='hiddenDate'></span>
                                            </td>
                                            <td></td>
                                            <td class='hidden-xs'>Δεν δόθηκε</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-4962</td>
                                            <td>Οικονομική -Χρηματοοικονομική Στατιστική</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2015-11-30 00:00:00</span>30.11.2015
                                            </td>
                                            <td>
                                                <span class='hiddenDate'></span>
                                            </td>
                                            <td></td>
                                            <td class='hidden-xs'>Δεν δόθηκε</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-4654</td>
                                            <td>Πτυχιακή Εργασία</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2015-11-30 00:00:00</span>30.11.2015
                                            </td>
                                            <td>
                                                <span class='hiddenDate'></span>
                                            </td>
                                            <td></td>
                                            <td class='hidden-xs'>Δεν δόθηκε</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-4156</td>
                                            <td>Χρονοσειρες</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2015-11-30 00:00:00</span>30.11.2015
                                            </td>
                                            <td>
                                                <span class='hiddenDate'></span>
                                            </td>
                                            <td></td>
                                            <td class='hidden-xs'>Δεν δόθηκε</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-3305</td>
                                            <td>Ανάλυση Διακύμανσης</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2015-09-01 00:00:00</span>01.09.2015
                                            </td>
                                            <td>
                                                <span class='hiddenDate'>2015-10-02 00:00:00</span>02.10.2015
                                            </td>
                                            <td>8.5</td>
                                            <td class='hidden-xs'>Ακύρωση</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-2706</td>
                                            <td>Μοντέλα Παλινδρόμησης</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2015-09-01 00:00:00</span>01.09.2015
                                            </td>
                                            <td>
                                                <span class='hiddenDate'>2015-09-03 00:00:00</span>03.09.2015
                                            </td>
                                            <td>9.5</td>
                                            <td class='hidden-xs'>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-2004</td>
                                            <td>Απειροστικός Λογισμός ΙΙ</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2015-03-17 17:34:26</span>17.03.2015
                                            </td>
                                            <td>
                                                <span class='hiddenDate'>2015-09-16 00:00:00</span>16.09.2015
                                            </td>
                                            <td>6</td>
                                            <td class='hidden-xs'>Ακύρωση</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-4455</td>
                                            <td>Οικονομετρία</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2015-03-17 17:34:20</span>17.03.2015
                                            </td>
                                            <td>
                                                <span class='hiddenDate'>2015-06-09 00:00:00</span>09.06.2015
                                            </td>
                                            <td>8.5</td>
                                            <td class='hidden-xs'>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-4404</td>
                                            <td>Αντασφάλιση</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2015-03-17 17:34:17</span>17.03.2015
                                            </td>
                                            <td>
                                                <span class='hiddenDate'>2015-06-25 00:00:00</span>25.06.2015
                                            </td>
                                            <td>10</td>
                                            <td class='hidden-xs'>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-4204</td>
                                            <td>Εισαγωγή στην Στατιστική Κατά Bayes</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2015-03-17 17:34:12</span>17.03.2015
                                            </td>
                                            <td>
                                                <span class='hiddenDate'>2015-06-23 00:00:00</span>23.06.2015
                                            </td>
                                            <td>8.5</td>
                                            <td class='hidden-xs'>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-3553</td>
                                            <td>Εισαγωγή στη Διοικητική Τραπεζικών Κινδύνων</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2015-03-17 17:34:06</span>17.03.2015
                                            </td>
                                            <td>
                                                <span class='hiddenDate'>2015-06-29 00:00:00</span>29.06.2015
                                            </td>
                                            <td>9</td>
                                            <td class='hidden-xs'>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-3305</td>
                                            <td>Ανάλυση Διακύμανσης</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2015-03-17 17:34:02</span>17.03.2015
                                            </td>
                                            <td>
                                                <span class='hiddenDate'>2015-06-25 00:00:00</span>25.06.2015
                                            </td>
                                            <td>8.5</td>
                                            <td class='hidden-xs'>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-4705</td>
                                            <td>Μαθηματικά Γενικών Ασφαλίσεων Ι</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2014-11-10 18:34:47</span>10.11.2014
                                            </td>
                                            <td>
                                                <span class='hiddenDate'>2015-02-17 00:00:00</span>17.02.2015
                                            </td>
                                            <td>10</td>
                                            <td class='hidden-xs'>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-4004</td>
                                            <td>Χρηματοοικονομικά Μαθηματικά ΙΙΙ</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2014-11-10 18:34:37</span>10.11.2014
                                            </td>
                                            <td>
                                                <span class='hiddenDate'>2015-02-05 00:00:00</span>05.02.2015
                                            </td>
                                            <td>10</td>
                                            <td class='hidden-xs'>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-2754</td>
                                            <td>Στοχαστικές Διαδικασίες ΙΙ</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2014-11-10 18:34:29</span>10.11.2014
                                            </td>
                                            <td>
                                                <span class='hiddenDate'>2015-02-04 00:00:00</span>04.02.2015
                                            </td>
                                            <td>9</td>
                                            <td class='hidden-xs'>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-3005</td>
                                            <td>Χρηματοοικονομικά Μαθηματικά Ι</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2014-11-10 18:34:25</span>10.11.2014
                                            </td>
                                            <td>
                                                <span class='hiddenDate'>2015-02-10 00:00:00</span>10.02.2015
                                            </td>
                                            <td>10</td>
                                            <td class='hidden-xs'>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-2706</td>
                                            <td>Μοντέλα Παλινδρόμησης</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2014-11-10 18:34:18</span>10.11.2014
                                            </td>
                                            <td>
                                                <span class='hiddenDate'>2015-02-12 00:00:00</span>12.02.2015
                                            </td>
                                            <td>7.5</td>
                                            <td class='hidden-xs'>Ακύρωση</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-1004</td>
                                            <td>Απειροστικός Λογισμός Ι</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2014-08-29 00:00:00</span>29.08.2014
                                            </td>
                                            <td>
                                                <span class='hiddenDate'>2014-09-22 00:00:00</span>22.09.2014
                                            </td>
                                            <td>6.5</td>
                                            <td class='hidden-xs'>Ακύρωση</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-2158</td>
                                            <td>Στατιστική Ι</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2014-08-29 00:00:00</span>29.08.2014
                                            </td>
                                            <td>
                                                <span class='hiddenDate'>2014-09-11 00:00:00</span>11.09.2014
                                            </td>
                                            <td>8.5</td>
                                            <td class='hidden-xs'>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-3106</td>
                                            <td>Μαθηματικά Ασφαλίσεων Ζωής Ι</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2014-08-29 00:00:00</span>29.08.2014
                                            </td>
                                            <td>
                                                <span class='hiddenDate'>2014-09-09 00:00:00</span>09.09.2014
                                            </td>
                                            <td>8.5</td>
                                            <td class='hidden-xs'>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-2004</td>
                                            <td>Απειροστικός Λογισμός ΙΙ</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2014-03-17 22:10:49</span>17.03.2014
                                            </td>
                                            <td>
                                                <span class='hiddenDate'></span>
                                            </td>
                                            <td></td>
                                            <td class='hidden-xs'>Δεν δόθηκε</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-2454</td>
                                            <td>Στατιστική ΙΙ</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2014-03-12 18:11:00</span>12.03.2014
                                            </td>
                                            <td>
                                                <span class='hiddenDate'>2014-06-12 00:00:00</span>12.06.2014
                                            </td>
                                            <td>9</td>
                                            <td class='hidden-xs'>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-6004</td>
                                            <td>Ανάλυση Θνησιμότητας</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2014-03-12 18:10:42</span>12.03.2014
                                            </td>
                                            <td>
                                                <span class='hiddenDate'>2014-06-20 00:00:00</span>20.06.2014
                                            </td>
                                            <td>10</td>
                                            <td class='hidden-xs'>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-3404</td>
                                            <td>Χρηματοοικονομικά Μαθηματικά ΙΙ</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2014-03-12 18:10:36</span>12.03.2014
                                            </td>
                                            <td>
                                                <span class='hiddenDate'>2014-06-12 00:00:00</span>12.06.2014
                                            </td>
                                            <td>10</td>
                                            <td class='hidden-xs'>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-2405</td>
                                            <td>Στοχαστικές Διαδικασίες Ι</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2014-03-12 18:10:29</span>12.03.2014
                                            </td>
                                            <td>
                                                <span class='hiddenDate'>2014-06-13 00:00:00</span>13.06.2014
                                            </td>
                                            <td>8</td>
                                            <td class='hidden-xs'>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-2353</td>
                                            <td>Συνήθεις Διαφορικές Εξισώσεις</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2014-03-12 18:10:27</span>12.03.2014
                                            </td>
                                            <td>
                                                <span class='hiddenDate'>2014-06-18 00:00:00</span>18.06.2014
                                            </td>
                                            <td>10</td>
                                            <td class='hidden-xs'>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-3106</td>
                                            <td>Μαθηματικά Ασφαλίσεων Ζωής Ι</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2013-12-02 15:16:01</span>02.12.2013
                                            </td>
                                            <td>
                                                <span class='hiddenDate'>2014-02-06 00:00:00</span>06.02.2014
                                            </td>
                                            <td>5</td>
                                            <td class='hidden-xs'>Ακύρωση</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-2306</td>
                                            <td>Πιθανότητες ΙΙ</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2013-12-02 15:15:47</span>02.12.2013
                                            </td>
                                            <td>
                                                <span class='hiddenDate'>2014-01-23 00:00:00</span>23.01.2014
                                            </td>
                                            <td>7</td>
                                            <td class='hidden-xs'>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-2158</td>
                                            <td>Στατιστική Ι</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2013-12-02 15:15:39</span>02.12.2013
                                            </td>
                                            <td>
                                                <span class='hiddenDate'>2014-01-22 00:00:00</span>22.01.2014
                                            </td>
                                            <td>5</td>
                                            <td class='hidden-xs'>Ακύρωση</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-1170</td>
                                            <td>Εφαρμοσμένη Γραμμική Άλγεβρα Ι</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2013-12-02 15:15:32</span>02.12.2013
                                            </td>
                                            <td>
                                                <span class='hiddenDate'>2014-02-13 00:00:00</span>13.02.2014
                                            </td>
                                            <td>8</td>
                                            <td class='hidden-xs'>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-1004</td>
                                            <td>Απειροστικός Λογισμός Ι</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2013-12-02 15:15:24</span>02.12.2013
                                            </td>
                                            <td>
                                                <span class='hiddenDate'>2014-01-21 00:00:00</span>21.01.2014
                                            </td>
                                            <td>6.5</td>
                                            <td class='hidden-xs'>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-0553</td>
                                            <td>Αγγλικά III</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2013-03-20 16:08:22</span>20.03.2013
                                            </td>
                                            <td>
                                                <span class='hiddenDate'>2013-06-06 00:00:00</span>06.06.2013
                                            </td>
                                            <td>9.5</td>
                                            <td class='hidden-xs'>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-2054</td>
                                            <td>Πιθανότητες Ι</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2013-03-20 16:08:13</span>20.03.2013
                                            </td>
                                            <td>
                                                <span class='hiddenDate'>2013-06-26 00:00:00</span>26.06.2013
                                            </td>
                                            <td>10</td>
                                            <td class='hidden-xs'>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-2203</td>
                                            <td>Μακροοικονομική Θεωρία</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2013-03-20 16:05:17</span>20.03.2013
                                            </td>
                                            <td>
                                                <span class='hiddenDate'>2013-06-21 00:00:00</span>21.06.2013
                                            </td>
                                            <td>9</td>
                                            <td class='hidden-xs'>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-2002</td>
                                            <td>Απειροστικός Λογισμός ΙΙ</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2013-03-20 16:05:13</span>20.03.2013
                                            </td>
                                            <td>
                                                <span class='hiddenDate'>2013-09-04 00:00:00</span>04.09.2013
                                            </td>
                                            <td>1.5</td>
                                            <td class='hidden-xs'>Αποτυχία</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-2002</td>
                                            <td>Απειροστικός Λογισμός ΙΙ</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2013-03-20 16:05:13</span>20.03.2013
                                            </td>
                                            <td>
                                                <span class='hiddenDate'>2013-06-11 00:00:00</span>11.06.2013
                                            </td>
                                            <td>1.5</td>
                                            <td class='hidden-xs'>Αποτυχία</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-1161</td>
                                            <td>Εφαρμοσμένη Γραμμική Άλγεβρα ΙΙ</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2013-03-20 16:05:09</span>20.03.2013
                                            </td>
                                            <td>
                                                <span class='hiddenDate'>2013-06-03 00:00:00</span>03.06.2013
                                            </td>
                                            <td>10</td>
                                            <td class='hidden-xs'>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-1052</td>
                                            <td>Εισαγωγή στην Ασφάλιση</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2013-03-20 16:04:38</span>20.03.2013
                                            </td>
                                            <td>
                                                <span class='hiddenDate'>2013-06-18 00:00:00</span>18.06.2013
                                            </td>
                                            <td>9</td>
                                            <td class='hidden-xs'>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-1156</td>
                                            <td>Εφαρμοσμένη Γραμμική Άλγεβρα Ι</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2012-11-13 15:02:37</span>13.11.2012
                                            </td>
                                            <td>
                                                <span class='hiddenDate'>2013-01-31 00:00:00</span>31.01.2013
                                            </td>
                                            <td>1</td>
                                            <td class='hidden-xs'>Αποτυχία</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-0503</td>
                                            <td>Αγγλικά II</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2012-11-12 00:00:00</span>12.11.2012
                                            </td>
                                            <td>
                                                <span class='hiddenDate'>2013-01-15 00:00:00</span>15.01.2013
                                            </td>
                                            <td>8.5</td>
                                            <td class='hidden-xs'>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-1002</td>
                                            <td>Απειροστικός Λογισμός Ι</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2012-10-30 00:00:00</span>30.10.2012
                                            </td>
                                            <td>
                                                <span class='hiddenDate'>2013-02-04 00:00:00</span>04.02.2013
                                            </td>
                                            <td>1</td>
                                            <td class='hidden-xs'>Αποτυχία</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-1103</td>
                                            <td>Πληροφορική με Εφαρμογές Στατιστικής</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2012-10-30 00:00:00</span>30.10.2012
                                            </td>
                                            <td>
                                                <span class='hiddenDate'>2013-01-28 00:00:00</span>28.01.2013
                                            </td>
                                            <td>10</td>
                                            <td class='hidden-xs'>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-1204</td>
                                            <td>Εισαγωγή στις Πιθανότητες και Τη Συνδυαστική</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2012-10-30 00:00:00</span>30.10.2012
                                            </td>
                                            <td>
                                                <span class='hiddenDate'>2013-01-24 00:00:00</span>24.01.2013
                                            </td>
                                            <td>7</td>
                                            <td class='hidden-xs'>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-2804</td>
                                            <td>Μικροοικονομική Θεωρία</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2012-10-30 00:00:00</span>30.10.2012
                                            </td>
                                            <td>
                                                <span class='hiddenDate'>2013-01-18 00:00:00</span>18.01.2013
                                            </td>
                                            <td>6</td>
                                            <td class='hidden-xs'>Ακύρωση</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-2103</td>
                                            <td>Εισαγωγή στα Χρηματοοικονομικά Μαθηματικά</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2012-10-30 00:00:00</span>30.10.2012
                                            </td>
                                            <td>
                                                <span class='hiddenDate'>2013-01-14 00:00:00</span>14.01.2013
                                            </td>
                                            <td>9</td>
                                            <td class='hidden-xs'>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td class='hidden-xs'>331-0453</td>
                                            <td>Αγγλικά I</td>
                                            <td class='hidden-xs'>
                                                <span class='hiddenDate'>2012-10-09 00:00:00</span>09.10.2012
                                            </td>
                                            <td>
                                                <span class='hiddenDate'>2012-10-09 00:00:00</span>09.10.2012
                                            </td>
                                            <td></td>
                                            <td class='hidden-xs'>Απαλλαγή</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <!-- /.box-body -->
                  
                        </div>
                        <!-- /.box -->
                
                    </div>
                    <!-- finish 1st /.tab-pane -->
                    <div class="tab-pane" id="tab_2">
                        <b>Δηλώσεις ανα Εξάμηνο:</b>
                        <table id="example" class="display" cellspacing="0" width="100%">
                            <thead>
                                <tr>
                                    <th>Κωδ. Μαθ.</th>
                                    <th>Τίτλος</th>
                                    <th>Εξάμηνο</th>
                                    <th class="hidden-xs">Δ.Μ.</th>
                                    <th class="hidden-xs">ECTS</th>
                                    <th class="hidden-xs">Τύπος</th>
                                    <th class="hidden-xs">Βαθμός</th>
                                    <th>Κωδ. Περιόδου</th>
                                    <th>Περίοδος</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Κωδ. Μαθ.</th>
                                    <th>Τίτλος</th>
                                    <th>Εξάμηνο</th>
                                    <th class="hidden-xs">Δ.Μ.</th>
                                    <th class="hidden-xs">ECTS</th>
                                    <th class="hidden-xs">Τύπος</th>
                                    <th class="hidden-xs">Βαθμός</th>
                                    <th>Κωδ. Περιόδου</th>
                                    <th>Περίοδος</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                <tr>
                                    <td>331-1002</td>
                                    <td>Απειροστικός Λογισμός Ι</td>
                                    <td>01</td>
                                    <td class='hidden-xs'>5</td>
                                    <td class='hidden-xs'>6</td>
                                    <td class='hidden-xs'>Υ</td>
                                    <td class='hidden-xs'>1</td>
                                    <td>201213_10</td>
                                    <td>Χειμερινό εξάμηνο 2012-2013</td>
                                </tr>
                                <tr>
                                    <td>331-1103</td>
                                    <td>Πληροφορική με Εφαρμογές Στατιστικής</td>
                                    <td>01</td>
                                    <td class='hidden-xs'>6</td>
                                    <td class='hidden-xs'>8</td>
                                    <td class='hidden-xs'>Υ</td>
                                    <td class='hidden-xs'>10</td>
                                    <td>201213_10</td>
                                    <td>Χειμερινό εξάμηνο 2012-2013</td>
                                </tr>
                                <tr>
                                    <td>331-1204</td>
                                    <td>Εισαγωγή στις Πιθανότητες και Τη Συνδυαστική</td>
                                    <td>01</td>
                                    <td class='hidden-xs'>3</td>
                                    <td class='hidden-xs'>5</td>
                                    <td class='hidden-xs'>Υ</td>
                                    <td class='hidden-xs'>7</td>
                                    <td>201213_10</td>
                                    <td>Χειμερινό εξάμηνο 2012-2013</td>
                                </tr>
                                <tr>
                                    <td>331-2103</td>
                                    <td>Εισαγωγή στα Χρηματοοικονομικά Μαθηματικά</td>
                                    <td>01</td>
                                    <td class='hidden-xs'>3</td>
                                    <td class='hidden-xs'>5</td>
                                    <td class='hidden-xs'>Υ</td>
                                    <td class='hidden-xs'>9</td>
                                    <td>201213_10</td>
                                    <td>Χειμερινό εξάμηνο 2012-2013</td>
                                </tr>
                                <tr>
                                    <td>331-2804</td>
                                    <td>Μικροοικονομική Θεωρία</td>
                                    <td>01</td>
                                    <td class='hidden-xs'>3</td>
                                    <td class='hidden-xs'>5</td>
                                    <td class='hidden-xs'>Υ</td>
                                    <td class='hidden-xs'>6</td>
                                    <td>201213_10</td>
                                    <td>Χειμερινό εξάμηνο 2012-2013</td>
                                </tr>
                                <tr>
                                    <td>331-1156</td>
                                    <td>Εφαρμοσμένη Γραμμική Άλγεβρα Ι</td>
                                    <td>01</td>
                                    <td class='hidden-xs'>3</td>
                                    <td class='hidden-xs'>5</td>
                                    <td class='hidden-xs'>Υ</td>
                                    <td class='hidden-xs'>1</td>
                                    <td>201213_10</td>
                                    <td>Χειμερινό εξάμηνο 2012-2013</td>
                                </tr>
                                <tr>
                                    <td>331-0503</td>
                                    <td>Αγγλικά II</td>
                                    <td>02,03</td>
                                    <td class='hidden-xs'>0</td>
                                    <td class='hidden-xs'>2</td>
                                    <td class='hidden-xs'>Υ</td>
                                    <td class='hidden-xs'>8.5</td>
                                    <td>201213_10</td>
                                    <td>Χειμερινό εξάμηνο 2012-2013</td>
                                </tr>
                                <tr>
                                    <td>331-0453</td>
                                    <td>Αγγλικά I</td>
                                    <td>01</td>
                                    <td class='hidden-xs'>0</td>
                                    <td class='hidden-xs'>1</td>
                                    <td class='hidden-xs'>Π0</td>
                                    <td class='hidden-xs'></td>
                                    <td>201213_10</td>
                                    <td>Χειμερινό εξάμηνο 2012-2013</td>
                                </tr>
                                <tr>
                                    <td>331-1052</td>
                                    <td>Εισαγωγή στην Ασφάλιση</td>
                                    <td>02</td>
                                    <td class='hidden-xs'>3</td>
                                    <td class='hidden-xs'>4</td>
                                    <td class='hidden-xs'>Υ</td>
                                    <td class='hidden-xs'>9</td>
                                    <td>201213_20</td>
                                    <td>Εαρινό εξάμηνο 2012-2013</td>
                                </tr>
                                <tr>
                                    <td>331-1161</td>
                                    <td>Εφαρμοσμένη Γραμμική Άλγεβρα ΙΙ</td>
                                    <td>02</td>
                                    <td class='hidden-xs'>3</td>
                                    <td class='hidden-xs'>6</td>
                                    <td class='hidden-xs'>Υ</td>
                                    <td class='hidden-xs'>10</td>
                                    <td>201213_20</td>
                                    <td>Εαρινό εξάμηνο 2012-2013</td>
                                </tr>
                                <tr>
                                    <td>331-2002</td>
                                    <td>Απειροστικός Λογισμός ΙΙ</td>
                                    <td>02</td>
                                    <td class='hidden-xs'>5</td>
                                    <td class='hidden-xs'>6</td>
                                    <td class='hidden-xs'>Υ</td>
                                    <td class='hidden-xs'>1.5</td>
                                    <td>201213_20</td>
                                    <td>Εαρινό εξάμηνο 2012-2013</td>
                                </tr>
                                <tr>
                                    <td>331-2203</td>
                                    <td>Μακροοικονομική Θεωρία</td>
                                    <td>02</td>
                                    <td class='hidden-xs'>6</td>
                                    <td class='hidden-xs'>8</td>
                                    <td class='hidden-xs'>Υ</td>
                                    <td class='hidden-xs'>9</td>
                                    <td>201213_20</td>
                                    <td>Εαρινό εξάμηνο 2012-2013</td>
                                </tr>
                                <tr>
                                    <td>331-2054</td>
                                    <td>Πιθανότητες Ι</td>
                                    <td>02</td>
                                    <td class='hidden-xs'>6</td>
                                    <td class='hidden-xs'>8</td>
                                    <td class='hidden-xs'>Υ</td>
                                    <td class='hidden-xs'>10</td>
                                    <td>201213_20</td>
                                    <td>Εαρινό εξάμηνο 2012-2013</td>
                                </tr>
                                <tr>
                                    <td>331-0553</td>
                                    <td>Αγγλικά III</td>
                                    <td>02,03</td>
                                    <td class='hidden-xs'>0</td>
                                    <td class='hidden-xs'>2</td>
                                    <td class='hidden-xs'>Υ</td>
                                    <td class='hidden-xs'>9.5</td>
                                    <td>201213_20</td>
                                    <td>Εαρινό εξάμηνο 2012-2013</td>
                                </tr>
                                <tr>
                                    <td>331-2002</td>
                                    <td>Απειροστικός Λογισμός ΙΙ</td>
                                    <td>02</td>
                                    <td class='hidden-xs'>5</td>
                                    <td class='hidden-xs'>6</td>
                                    <td class='hidden-xs'>Υ</td>
                                    <td class='hidden-xs'>1.5</td>
                                    <td>201213_20</td>
                                    <td>Εαρινό εξάμηνο 2012-2013</td>
                                </tr>
                                <tr>
                                    <td>331-1004</td>
                                    <td>Απειροστικός Λογισμός Ι</td>
                                    <td>01</td>
                                    <td class='hidden-xs'>3</td>
                                    <td class='hidden-xs'>8</td>
                                    <td class='hidden-xs'>Υ</td>
                                    <td class='hidden-xs'>6.5</td>
                                    <td>201314_10</td>
                                    <td>Χειμερινό εξάμηνο 2013-2014</td>
                                </tr>
                                <tr>
                                    <td>331-1170</td>
                                    <td>Εφαρμοσμένη Γραμμική Άλγεβρα Ι</td>
                                    <td>01</td>
                                    <td class='hidden-xs'>3</td>
                                    <td class='hidden-xs'>8</td>
                                    <td class='hidden-xs'>Υ</td>
                                    <td class='hidden-xs'>8</td>
                                    <td>201314_10</td>
                                    <td>Χειμερινό εξάμηνο 2013-2014</td>
                                </tr>
                                <tr>
                                    <td>331-2158</td>
                                    <td>Στατιστική Ι</td>
                                    <td>03</td>
                                    <td class='hidden-xs'>4</td>
                                    <td class='hidden-xs'>10</td>
                                    <td class='hidden-xs'>Υ</td>
                                    <td class='hidden-xs'>5</td>
                                    <td>201314_10</td>
                                    <td>Χειμερινό εξάμηνο 2013-2014</td>
                                </tr>
                                <tr>
                                    <td>331-2306</td>
                                    <td>Πιθανότητες ΙΙ</td>
                                    <td>03</td>
                                    <td class='hidden-xs'>4</td>
                                    <td class='hidden-xs'>10</td>
                                    <td class='hidden-xs'>Υ</td>
                                    <td class='hidden-xs'>7</td>
                                    <td>201314_10</td>
                                    <td>Χειμερινό εξάμηνο 2013-2014</td>
                                </tr>
                                <tr>
                                    <td>331-3106</td>
                                    <td>Μαθηματικά Ασφαλίσεων Ζωής Ι</td>
                                    <td>03</td>
                                    <td class='hidden-xs'>4</td>
                                    <td class='hidden-xs'>10</td>
                                    <td class='hidden-xs'>Υ</td>
                                    <td class='hidden-xs'>5</td>
                                    <td>201314_10</td>
                                    <td>Χειμερινό εξάμηνο 2013-2014</td>
                                </tr>
                                <tr>
                                    <td>331-2353</td>
                                    <td>Συνήθεις Διαφορικές Εξισώσεις</td>
                                    <td>04</td>
                                    <td class='hidden-xs'>3</td>
                                    <td class='hidden-xs'>5</td>
                                    <td class='hidden-xs'>ΚΕΥ</td>
                                    <td class='hidden-xs'>10</td>
                                    <td>201314_20</td>
                                    <td>Εαρινό εξάμηνο 2013-2014</td>
                                </tr>
                                <tr>
                                    <td>331-2405</td>
                                    <td>Στοχαστικές Διαδικασίες Ι</td>
                                    <td>04</td>
                                    <td class='hidden-xs'>3</td>
                                    <td class='hidden-xs'>8</td>
                                    <td class='hidden-xs'>Υ</td>
                                    <td class='hidden-xs'>8</td>
                                    <td>201314_20</td>
                                    <td>Εαρινό εξάμηνο 2013-2014</td>
                                </tr>
                                <tr>
                                    <td>331-3404</td>
                                    <td>Χρηματοοικονομικά Μαθηματικά ΙΙ</td>
                                    <td>06</td>
                                    <td class='hidden-xs'>3</td>
                                    <td class='hidden-xs'>5</td>
                                    <td class='hidden-xs'>ΚΕΥ</td>
                                    <td class='hidden-xs'>10</td>
                                    <td>201314_20</td>
                                    <td>Εαρινό εξάμηνο 2013-2014</td>
                                </tr>
                                <tr>
                                    <td>331-6004</td>
                                    <td>Ανάλυση Θνησιμότητας</td>
                                    <td>06</td>
                                    <td class='hidden-xs'>3</td>
                                    <td class='hidden-xs'>8</td>
                                    <td class='hidden-xs'>Υ</td>
                                    <td class='hidden-xs'>10</td>
                                    <td>201314_20</td>
                                    <td>Εαρινό εξάμηνο 2013-2014</td>
                                </tr>
                                <tr>
                                    <td>331-2454</td>
                                    <td>Στατιστική ΙΙ</td>
                                    <td>04</td>
                                    <td class='hidden-xs'>3</td>
                                    <td class='hidden-xs'>8</td>
                                    <td class='hidden-xs'>Υ</td>
                                    <td class='hidden-xs'>9</td>
                                    <td>201314_20</td>
                                    <td>Εαρινό εξάμηνο 2013-2014</td>
                                </tr>
                                <tr>
                                    <td>331-2004</td>
                                    <td>Απειροστικός Λογισμός ΙΙ</td>
                                    <td>02</td>
                                    <td class='hidden-xs'>3</td>
                                    <td class='hidden-xs'>8</td>
                                    <td class='hidden-xs'>Υ</td>
                                    <td class='hidden-xs'></td>
                                    <td>201314_20</td>
                                    <td>Εαρινό εξάμηνο 2013-2014</td>
                                </tr>
                                <tr>
                                    <td>331-2158</td>
                                    <td>Στατιστική Ι</td>
                                    <td>03</td>
                                    <td class='hidden-xs'>4</td>
                                    <td class='hidden-xs'>10</td>
                                    <td class='hidden-xs'>Υ</td>
                                    <td class='hidden-xs'>8.5</td>
                                    <td>201314_30</td>
                                    <td>Σεπτέμβρης 2013-2014</td>
                                </tr>
                                <tr>
                                    <td>331-3106</td>
                                    <td>Μαθηματικά Ασφαλίσεων Ζωής Ι</td>
                                    <td>03</td>
                                    <td class='hidden-xs'>4</td>
                                    <td class='hidden-xs'>10</td>
                                    <td class='hidden-xs'>Υ</td>
                                    <td class='hidden-xs'>8.5</td>
                                    <td>201314_10</td>
                                    <td>Χειμερινό εξάμηνο 2013-2014</td>
                                </tr>
                                <tr>
                                    <td>331-1004</td>
                                    <td>Απειροστικός Λογισμός Ι</td>
                                    <td>01</td>
                                    <td class='hidden-xs'>3</td>
                                    <td class='hidden-xs'>8</td>
                                    <td class='hidden-xs'>Υ</td>
                                    <td class='hidden-xs'>6.5</td>
                                    <td>201314_10</td>
                                    <td>Χειμερινό εξάμηνο 2013-2014</td>
                                </tr>
                                <tr>
                                    <td>331-2706</td>
                                    <td>Μοντέλα Παλινδρόμησης</td>
                                    <td>05</td>
                                    <td class='hidden-xs'>4</td>
                                    <td class='hidden-xs'>10</td>
                                    <td class='hidden-xs'>Υ</td>
                                    <td class='hidden-xs'>7.5</td>
                                    <td>201415_10</td>
                                    <td>Χειμερινό εξάμηνο 2014-2015</td>
                                </tr>
                                <tr>
                                    <td>331-3005</td>
                                    <td>Χρηματοοικονομικά Μαθηματικά Ι</td>
                                    <td>05</td>
                                    <td class='hidden-xs'>4</td>
                                    <td class='hidden-xs'>10</td>
                                    <td class='hidden-xs'>Υ</td>
                                    <td class='hidden-xs'>10</td>
                                    <td>201415_10</td>
                                    <td>Χειμερινό εξάμηνο 2014-2015</td>
                                </tr>
                                <tr>
                                    <td>331-2754</td>
                                    <td>Στοχαστικές Διαδικασίες ΙΙ</td>
                                    <td>05</td>
                                    <td class='hidden-xs'>3</td>
                                    <td class='hidden-xs'>5</td>
                                    <td class='hidden-xs'>ΚΕΥ</td>
                                    <td class='hidden-xs'>9</td>
                                    <td>201415_10</td>
                                    <td>Χειμερινό εξάμηνο 2014-2015</td>
                                </tr>
                                <tr>
                                    <td>331-4004</td>
                                    <td>Χρηματοοικονομικά Μαθηματικά ΙΙΙ</td>
                                    <td>07</td>
                                    <td class='hidden-xs'>3</td>
                                    <td class='hidden-xs'>5</td>
                                    <td class='hidden-xs'>Π</td>
                                    <td class='hidden-xs'>10</td>
                                    <td>201415_10</td>
                                    <td>Χειμερινό εξάμηνο 2014-2015</td>
                                </tr>
                                <tr>
                                    <td>331-4705</td>
                                    <td>Μαθηματικά Γενικών Ασφαλίσεων Ι</td>
                                    <td>07</td>
                                    <td class='hidden-xs'>3</td>
                                    <td class='hidden-xs'>8</td>
                                    <td class='hidden-xs'>Υ</td>
                                    <td class='hidden-xs'>10</td>
                                    <td>201415_10</td>
                                    <td>Χειμερινό εξάμηνο 2014-2015</td>
                                </tr>
                                <tr>
                                    <td>331-3305</td>
                                    <td>Ανάλυση Διακύμανσης</td>
                                    <td>06</td>
                                    <td class='hidden-xs'>3</td>
                                    <td class='hidden-xs'>8</td>
                                    <td class='hidden-xs'>Υ</td>
                                    <td class='hidden-xs'>8.5</td>
                                    <td>201415_20</td>
                                    <td>Εαρινό εξάμηνο 2014-2015</td>
                                </tr>
                                <tr>
                                    <td>331-3553</td>
                                    <td>Εισαγωγή στη Διοικητική Τραπεζικών Κινδύνων</td>
                                    <td>06</td>
                                    <td class='hidden-xs'>3</td>
                                    <td class='hidden-xs'>5</td>
                                    <td class='hidden-xs'>ΚΕΥ</td>
                                    <td class='hidden-xs'>9</td>
                                    <td>201415_20</td>
                                    <td>Εαρινό εξάμηνο 2014-2015</td>
                                </tr>
                                <tr>
                                    <td>331-4204</td>
                                    <td>Εισαγωγή στην Στατιστική Κατά Bayes</td>
                                    <td>06</td>
                                    <td class='hidden-xs'>3</td>
                                    <td class='hidden-xs'>5</td>
                                    <td class='hidden-xs'>ΚΕΥ</td>
                                    <td class='hidden-xs'>8.5</td>
                                    <td>201415_20</td>
                                    <td>Εαρινό εξάμηνο 2014-2015</td>
                                </tr>
                                <tr>
                                    <td>331-4404</td>
                                    <td>Αντασφάλιση</td>
                                    <td>08</td>
                                    <td class='hidden-xs'>3</td>
                                    <td class='hidden-xs'>5</td>
                                    <td class='hidden-xs'>ΚΕΥ</td>
                                    <td class='hidden-xs'>10</td>
                                    <td>201415_20</td>
                                    <td>Εαρινό εξάμηνο 2014-2015</td>
                                </tr>
                                <tr>
                                    <td>331-4455</td>
                                    <td>Οικονομετρία</td>
                                    <td>08</td>
                                    <td class='hidden-xs'>4</td>
                                    <td class='hidden-xs'>10</td>
                                    <td class='hidden-xs'>Υ</td>
                                    <td class='hidden-xs'>8.5</td>
                                    <td>201415_20</td>
                                    <td>Εαρινό εξάμηνο 2014-2015</td>
                                </tr>
                                <tr>
                                    <td>331-2004</td>
                                    <td>Απειροστικός Λογισμός ΙΙ</td>
                                    <td>02</td>
                                    <td class='hidden-xs'>3</td>
                                    <td class='hidden-xs'>8</td>
                                    <td class='hidden-xs'>Υ</td>
                                    <td class='hidden-xs'>6</td>
                                    <td>201415_20</td>
                                    <td>Εαρινό εξάμηνο 2014-2015</td>
                                </tr>
                                <tr>
                                    <td>331-2706</td>
                                    <td>Μοντέλα Παλινδρόμησης</td>
                                    <td>05</td>
                                    <td class='hidden-xs'>4</td>
                                    <td class='hidden-xs'>10</td>
                                    <td class='hidden-xs'>Υ</td>
                                    <td class='hidden-xs'>9.5</td>
                                    <td>201415_30</td>
                                    <td>Σεπτέμβρης 2014-2015</td>
                                </tr>
                                <tr>
                                    <td>331-3305</td>
                                    <td>Ανάλυση Διακύμανσης</td>
                                    <td>06</td>
                                    <td class='hidden-xs'>3</td>
                                    <td class='hidden-xs'>8</td>
                                    <td class='hidden-xs'>Υ</td>
                                    <td class='hidden-xs'>8.5</td>
                                    <td>201415_30</td>
                                    <td>Σεπτέμβρης 2014-2015</td>
                                </tr>
                                <tr>
                                    <td>311-0186</td>
                                    <td>Διακριτά Μαθηματικά</td>
                                    <td>από μαθηματικό</td>
                                    <td class='hidden-xs'>4</td>
                                    <td class='hidden-xs'>6</td>
                                    <td class='hidden-xs'>Π</td>
                                    <td class='hidden-xs'></td>
                                    <td>201516_10</td>
                                    <td>Χειμερινό εξάμηνο 2015-2016</td>
                                </tr>
                                <tr>
                                    <td>311-2303</td>
                                    <td>Διδακτική Ευκλείδειας Γεωμετρίας</td>
                                    <td>από μαθηματικό</td>
                                    <td class='hidden-xs'>4</td>
                                    <td class='hidden-xs'>6</td>
                                    <td class='hidden-xs'>Π</td>
                                    <td class='hidden-xs'></td>
                                    <td>201516_10</td>
                                    <td>Χειμερινό εξάμηνο 2015-2016</td>
                                </tr>
                                <tr>
                                    <td>311-2353</td>
                                    <td>Νέες Τεχνολογίες στην Εκπαίδευση</td>
                                    <td>από μαθηματικό</td>
                                    <td class='hidden-xs'>4</td>
                                    <td class='hidden-xs'>6</td>
                                    <td class='hidden-xs'>Π</td>
                                    <td class='hidden-xs'></td>
                                    <td>201516_10</td>
                                    <td>Χειμερινό εξάμηνο 2015-2016</td>
                                </tr>
                                <tr>
                                    <td>321-2304_Π</td>
                                    <td>Λειτουργία των Επιχειρήσεων και Πληροφοριακών Συστημάτων</td>
                                    <td>από ΜΠΕΣ</td>
                                    <td class='hidden-xs'>5</td>
                                    <td class='hidden-xs'>5</td>
                                    <td class='hidden-xs'>Π</td>
                                    <td class='hidden-xs'></td>
                                    <td>201516_10</td>
                                    <td>Χειμερινό εξάμηνο 2015-2016</td>
                                </tr>
                                <tr>
                                    <td>331-3255</td>
                                    <td>Δειγματοληψία</td>
                                    <td>05</td>
                                    <td class='hidden-xs'>2</td>
                                    <td class='hidden-xs'>5</td>
                                    <td class='hidden-xs'>Ε</td>
                                    <td class='hidden-xs'></td>
                                    <td>201516_10</td>
                                    <td>Χειμερινό εξάμηνο 2015-2016</td>
                                </tr>
                                <tr>
                                    <td>331-3655</td>
                                    <td>Γραμμικά και Γενικευμένα Γραμμικά Μοντέλα</td>
                                    <td>07</td>
                                    <td class='hidden-xs'>4</td>
                                    <td class='hidden-xs'>6</td>
                                    <td class='hidden-xs'>ΚΕΥ</td>
                                    <td class='hidden-xs'></td>
                                    <td>201516_10</td>
                                    <td>Χειμερινό εξάμηνο 2015-2016</td>
                                </tr>
                                <tr>
                                    <td>331-3707</td>
                                    <td>Ανάλυση Κατηγορικών Δεδομένων</td>
                                    <td>06</td>
                                    <td class='hidden-xs'>4</td>
                                    <td class='hidden-xs'>6</td>
                                    <td class='hidden-xs'>ΚΕΥ</td>
                                    <td class='hidden-xs'>7.5</td>
                                    <td>201516_10</td>
                                    <td>Χειμερινό εξάμηνο 2015-2016</td>
                                </tr>
                                <tr>
                                    <td>331-4105</td>
                                    <td>Βιοστατιστικη</td>
                                    <td>07</td>
                                    <td class='hidden-xs'>2</td>
                                    <td class='hidden-xs'>5</td>
                                    <td class='hidden-xs'>Ε</td>
                                    <td class='hidden-xs'></td>
                                    <td>201516_10</td>
                                    <td>Χειμερινό εξάμηνο 2015-2016</td>
                                </tr>
                                <tr>
                                    <td>331-4156</td>
                                    <td>Χρονοσειρες</td>
                                    <td>07</td>
                                    <td class='hidden-xs'>4</td>
                                    <td class='hidden-xs'>6</td>
                                    <td class='hidden-xs'>ΚΕΥ</td>
                                    <td class='hidden-xs'></td>
                                    <td>201516_10</td>
                                    <td>Χειμερινό εξάμηνο 2015-2016</td>
                                </tr>
                                <tr>
                                    <td>331-4654</td>
                                    <td>Πτυχιακή Εργασία</td>
                                    <td>07,08</td>
                                    <td class='hidden-xs'>12</td>
                                    <td class='hidden-xs'>15</td>
                                    <td class='hidden-xs'>Ε</td>
                                    <td class='hidden-xs'></td>
                                    <td>201516_10</td>
                                    <td>Χειμερινό εξάμηνο 2015-2016</td>
                                </tr>
                                <tr>
                                    <td>331-4962</td>
                                    <td>Οικονομική -Χρηματοοικονομική Στατιστική</td>
                                    <td>07</td>
                                    <td class='hidden-xs'>2</td>
                                    <td class='hidden-xs'>5</td>
                                    <td class='hidden-xs'>Ε</td>
                                    <td class='hidden-xs'></td>
                                    <td>201516_10</td>
                                    <td>Χειμερινό εξάμηνο 2015-2016</td>
                                </tr>
                                <tr>
                                    <td>331-5004</td>
                                    <td>Επιχειρησιακή Ερευνά (Γραμμικός και Δυναμικός Προγραμματισμός)</td>
                                    <td>05</td>
                                    <td class='hidden-xs'>2</td>
                                    <td class='hidden-xs'>5</td>
                                    <td class='hidden-xs'>Ε</td>
                                    <td class='hidden-xs'></td>
                                    <td>201516_10</td>
                                    <td>Χειμερινό εξάμηνο 2015-2016</td>
                                </tr>
                                <tr>
                                    <td>331-7023</td>
                                    <td>Μερικές Διαφορικές Εξισώσεις</td>
                                    <td>05</td>
                                    <td class='hidden-xs'>4</td>
                                    <td class='hidden-xs'>6</td>
                                    <td class='hidden-xs'>ΚΕΥ</td>
                                    <td class='hidden-xs'></td>
                                    <td>201516_10</td>
                                    <td>Χειμερινό εξάμηνο 2015-2016</td>
                                </tr>
                                <tr>
                                    <td>331-7102</td>
                                    <td>Απαραμετρική Στατιστική</td>
                                    <td>07</td>
                                    <td class='hidden-xs'>2</td>
                                    <td class='hidden-xs'>5</td>
                                    <td class='hidden-xs'>E</td>
                                    <td class='hidden-xs'></td>
                                    <td>201516_10</td>
                                    <td>Χειμερινό εξάμηνο 2015-2016</td>
                                </tr>
                                <tr>
                                    <td>311-0247</td>
                                    <td>Γενική Τοπολογία</td>
                                    <td>από μαθηματικό</td>
                                    <td class='hidden-xs'>4</td>
                                    <td class='hidden-xs'>6</td>
                                    <td class='hidden-xs'>E</td>
                                    <td class='hidden-xs'></td>
                                    <td>201516_20</td>
                                    <td>Εαρινό εξάμηνο 2015-2016</td>
                                </tr>
                                <tr>
                                    <td>311-2002</td>
                                    <td>Κρυπτογραφία</td>
                                    <td>από μαθηματικό</td>
                                    <td class='hidden-xs'>4</td>
                                    <td class='hidden-xs'>6</td>
                                    <td class='hidden-xs'>Ε</td>
                                    <td class='hidden-xs'></td>
                                    <td>201516_20</td>
                                    <td>Εαρινό εξάμηνο 2015-2016</td>
                                </tr>
                                <tr>
                                    <td>311-2451</td>
                                    <td>Στοιχειώδης Θεωρία Συνόλων</td>
                                    <td>από μαθηματικό</td>
                                    <td class='hidden-xs'>4</td>
                                    <td class='hidden-xs'>6</td>
                                    <td class='hidden-xs'>Ε</td>
                                    <td class='hidden-xs'></td>
                                    <td>201516_20</td>
                                    <td>Εαρινό εξάμηνο 2015-2016</td>
                                </tr>
                                <tr>
                                    <td>311-2851</td>
                                    <td>Ιστορία Ευκλείδειων και μη Ευκλείδειων Γεωμετριών</td>
                                    <td>από μαθηματικό</td>
                                    <td class='hidden-xs'>4</td>
                                    <td class='hidden-xs'>6</td>
                                    <td class='hidden-xs'>Ε</td>
                                    <td class='hidden-xs'></td>
                                    <td>201516_20</td>
                                    <td>Εαρινό εξάμηνο 2015-2016</td>
                                </tr>
                                <tr>
                                    <td>321-11100</td>
                                    <td>Τεχνολογίες και Εφαρμογές Ηλεκτρονικής Διακυβέρνησης</td>
                                    <td>από ΜΠΕΣ</td>
                                    <td class='hidden-xs'>5</td>
                                    <td class='hidden-xs'>5</td>
                                    <td class='hidden-xs'>Ε</td>
                                    <td class='hidden-xs'></td>
                                    <td>201516_20</td>
                                    <td>Εαρινό εξάμηνο 2015-2016</td>
                                </tr>
                                <tr>
                                    <td>321-2104</td>
                                    <td>Αντικειμενοστραφης Προγραμματισμός Ι</td>
                                    <td>από ΜΠΕΣ</td>
                                    <td class='hidden-xs'>5</td>
                                    <td class='hidden-xs'>5</td>
                                    <td class='hidden-xs'>Ε</td>
                                    <td class='hidden-xs'></td>
                                    <td>201516_20</td>
                                    <td>Εαρινό εξάμηνο 2015-2016</td>
                                </tr>
                                <tr>
                                    <td>321-3404</td>
                                    <td>Ασφάλεια Πληροφοριακών & Επικοινωνιακών Συστημάτων</td>
                                    <td>από ΜΠΕΣ</td>
                                    <td class='hidden-xs'>5</td>
                                    <td class='hidden-xs'>5</td>
                                    <td class='hidden-xs'>Ε</td>
                                    <td class='hidden-xs'></td>
                                    <td>201516_20</td>
                                    <td>Εαρινό εξάμηνο 2015-2016</td>
                                </tr>
                                <tr>
                                    <td>321-3453</td>
                                    <td>Τηλεπικοινωνίες</td>
                                    <td>από ΜΠΕΣ</td>
                                    <td class='hidden-xs'>6</td>
                                    <td class='hidden-xs'>5</td>
                                    <td class='hidden-xs'>Ε</td>
                                    <td class='hidden-xs'></td>
                                    <td>201516_20</td>
                                    <td>Εαρινό εξάμηνο 2015-2016</td>
                                </tr>
                                <tr>
                                    <td>321-3603</td>
                                    <td>Τεχνητή Νοημοσύνη</td>
                                    <td>από ΜΠΕΣ</td>
                                    <td class='hidden-xs'>5</td>
                                    <td class='hidden-xs'>5</td>
                                    <td class='hidden-xs'>Ε</td>
                                    <td class='hidden-xs'></td>
                                    <td>201516_20</td>
                                    <td>Εαρινό εξάμηνο 2015-2016</td>
                                </tr>
                                <tr>
                                    <td>321-9352</td>
                                    <td>Ψηφιακή Επεξεργασία Εικόνας</td>
                                    <td>από ΜΠΕΣ</td>
                                    <td class='hidden-xs'>4</td>
                                    <td class='hidden-xs'>5</td>
                                    <td class='hidden-xs'>Ε</td>
                                    <td class='hidden-xs'></td>
                                    <td>201516_20</td>
                                    <td>Εαρινό εξάμηνο 2015-2016</td>
                                </tr>
                                <tr>
                                    <td>331-2656</td>
                                    <td>Αριθμητική Ανάλυση</td>
                                    <td>06</td>
                                    <td class='hidden-xs'>4</td>
                                    <td class='hidden-xs'>6</td>
                                    <td class='hidden-xs'>ΚΕΥ</td>
                                    <td class='hidden-xs'></td>
                                    <td>201516_20</td>
                                    <td>Εαρινό εξάμηνο 2015-2016</td>
                                </tr>
                                <tr>
                                    <td>331-2900</td>
                                    <td>Ανάλυση Ι</td>
                                    <td>04</td>
                                    <td class='hidden-xs'>4</td>
                                    <td class='hidden-xs'>6</td>
                                    <td class='hidden-xs'>ΚΕΥ</td>
                                    <td class='hidden-xs'></td>
                                    <td>201516_20</td>
                                    <td>Εαρινό εξάμηνο 2015-2016</td>
                                </tr>
                                <tr>
                                    <td>331-4555</td>
                                    <td>Ανάλυση Επιβίωσης</td>
                                    <td>08</td>
                                    <td class='hidden-xs'>2</td>
                                    <td class='hidden-xs'>5</td>
                                    <td class='hidden-xs'>Ε</td>
                                    <td class='hidden-xs'></td>
                                    <td>201516_20</td>
                                    <td>Εαρινό εξάμηνο 2015-2016</td>
                                </tr>
                                <tr>
                                    <td>331-9204</td>
                                    <td>Στατιστικά Πακέτα και Ανάλυση Δεδομένων</td>
                                    <td>08</td>
                                    <td class='hidden-xs'>4</td>
                                    <td class='hidden-xs'>6</td>
                                    <td class='hidden-xs'>KEΥ</td>
                                    <td class='hidden-xs'>10</td>
                                    <td>201516_20</td>
                                    <td>Εαρινό εξάμηνο 2015-2016</td>
                                </tr>
                                <tr>
                                    <td>331-9252</td>
                                    <td>Περιβαλλοντικά Συστήματα με Εφαρμογές στη Στατιστική</td>
                                    <td>08</td>
                                    <td class='hidden-xs'>2</td>
                                    <td class='hidden-xs'>5</td>
                                    <td class='hidden-xs'>Ε</td>
                                    <td class='hidden-xs'></td>
                                    <td>201516_20</td>
                                    <td>Εαρινό εξάμηνο 2015-2016</td>
                                </tr>
                                <tr>
                                    <td>331-9600</td>
                                    <td>Συναρτησιακή Ανάλυση</td>
                                    <td>08</td>
                                    <td class='hidden-xs'>4</td>
                                    <td class='hidden-xs'>6</td>
                                    <td class='hidden-xs'>ΚΕΥ</td>
                                    <td class='hidden-xs'></td>
                                    <td>201516_20</td>
                                    <td>Εαρινό εξάμηνο 2015-2016</td>
                                </tr>
                                <tr>
                                    <td>331-4654</td>
                                    <td>Πτυχιακή Εργασία</td>
                                    <td>07,08</td>
                                    <td class='hidden-xs'>12</td>
                                    <td class='hidden-xs'>15</td>
                                    <td class='hidden-xs'>Ε</td>
                                    <td class='hidden-xs'>10</td>
                                    <td>201516_20</td>
                                    <td>Εαρινό εξάμηνο 2015-2016</td>
                                </tr>
                                <tr>
                                    <td>331-2005</td>
                                    <td>Απειροστικός Λογισμός ΙΙ</td>
                                    <td>02</td>
                                    <td class='hidden-xs'>5</td>
                                    <td class='hidden-xs'>9</td>
                                    <td class='hidden-xs'>Υ</td>
                                    <td class='hidden-xs'>10</td>
                                    <td>201516_31</td>
                                    <td>Σεπτέμβρης 2015-2016</td>
                                </tr>
                                <tr>
                                    <td>331-2806</td>
                                    <td>Μικροοικονομική Θεωρία I</td>
                                    <td>01</td>
                                    <td class='hidden-xs'>5</td>
                                    <td class='hidden-xs'>9</td>
                                    <td class='hidden-xs'>Υ</td>
                                    <td class='hidden-xs'>10</td>
                                    <td>201516_31</td>
                                    <td>Σεπτέμβρης 2015-2016</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- finish 2nd /.tab-pane -->
                    <div class="tab-pane" id="tab_3">
                        <div class="box">
                            <div class="box-body table-responsive no-padding">
                                <table id="example3" class="table table-bordered table-striped myTable" style="font-size: 13px;">
                                    <thead>
                                        <tr>
                                            <th>Κωδικός</th>
                                            <th>Τίτλος Μαθήματος</th>
                                            <th>Είδος</th>
                                            <th>Δ.Μ.</th>
                                            <th>ECTS</th>
                                            <th style="padding-left: 2px !important;">Συντ. Βαρυτ.</th>
                                            <th style="padding-left: 10px !important; word-wrap:break-word;">Informatics</th>
                                            <th>Υπολ. Πτυχ.</th>
                                            <th>Ημ/νία δήλωσης</th>
                                            <th>Ημ/νια Εξέτ</th>
                                            <th style="padding-left: 10px !important;">Βαθμός</th>
                                            <th style="padding-left: 10px !important; word-wrap:break-word;">Χαρακτηρισμός</th>
                                        </tr>
                                    </thead>
                                    <tbody style="word-wrap:break-word;">
                                        <tr>
                                            <td>331-0503</td>
                                            <td>Αγγλικά II</td>
                                            <td  width='5px'>Υ</td>
                                            <td>0</td>
                                            <td>2</td>
                                            <td>1.5</td>
                                            <td>Όχι</td>
                                            <td>Ναι</td>
                                            <td>12.11.2012</td>
                                            <td>15.01.2013</td>
                                            <td>8.5</td>
                                            <td>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td>331-0553</td>
                                            <td>Αγγλικά III</td>
                                            <td  width='5px'>Υ</td>
                                            <td>0</td>
                                            <td>2</td>
                                            <td>1.5</td>
                                            <td>Όχι</td>
                                            <td>Ναι</td>
                                            <td>20.03.2013</td>
                                            <td>06.06.2013</td>
                                            <td>9.5</td>
                                            <td>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td>331-1004</td>
                                            <td>Απειροστικός Λογισμός Ι</td>
                                            <td  width='5px'>Υ</td>
                                            <td>3</td>
                                            <td>8</td>
                                            <td>2</td>
                                            <td>Όχι</td>
                                            <td>Ναι</td>
                                            <td>29.08.2014</td>
                                            <td>22.09.2014</td>
                                            <td>6.5</td>
                                            <td>Ακύρωση</td>
                                        </tr>
                                        <tr>
                                            <td>331-1004</td>
                                            <td>Απειροστικός Λογισμός Ι</td>
                                            <td  width='5px'>Υ</td>
                                            <td>3</td>
                                            <td>8</td>
                                            <td>2</td>
                                            <td>Όχι</td>
                                            <td>Ναι</td>
                                            <td>02.12.2013</td>
                                            <td>21.01.2014</td>
                                            <td>6.5</td>
                                            <td>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td>331-1052</td>
                                            <td>Εισαγωγή στην Ασφάλιση</td>
                                            <td  width='5px'>Υ</td>
                                            <td>3</td>
                                            <td>4</td>
                                            <td>2</td>
                                            <td>Όχι</td>
                                            <td>Ναι</td>
                                            <td>20.03.2013</td>
                                            <td>18.06.2013</td>
                                            <td>9</td>
                                            <td>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td>331-1103</td>
                                            <td>Πληροφορική με Εφαρμογές Στατιστικής</td>
                                            <td  width='5px'>Υ</td>
                                            <td>6</td>
                                            <td>8</td>
                                            <td>2</td>
                                            <td>Ναι</td>
                                            <td>Ναι</td>
                                            <td>30.10.2012</td>
                                            <td>28.01.2013</td>
                                            <td>10</td>
                                            <td>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td>331-1161</td>
                                            <td>Εφαρμοσμένη Γραμμική Άλγεβρα ΙΙ</td>
                                            <td  width='5px'>Υ</td>
                                            <td>3</td>
                                            <td>6</td>
                                            <td>2</td>
                                            <td>Όχι</td>
                                            <td>Ναι</td>
                                            <td>20.03.2013</td>
                                            <td>03.06.2013</td>
                                            <td>10</td>
                                            <td>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td>331-1170</td>
                                            <td>Εφαρμοσμένη Γραμμική Άλγεβρα Ι</td>
                                            <td  width='5px'>Υ</td>
                                            <td>3</td>
                                            <td>8</td>
                                            <td>2</td>
                                            <td>Όχι</td>
                                            <td>Ναι</td>
                                            <td>02.12.2013</td>
                                            <td>13.02.2014</td>
                                            <td>8</td>
                                            <td>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td>331-1204</td>
                                            <td>Εισαγωγή στις Πιθανότητες και Τη Συνδυαστική</td>
                                            <td  width='5px'>Υ</td>
                                            <td>3</td>
                                            <td>5</td>
                                            <td>2</td>
                                            <td>Ναι</td>
                                            <td>Ναι</td>
                                            <td>30.10.2012</td>
                                            <td>24.01.2013</td>
                                            <td>7</td>
                                            <td>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td>331-2004</td>
                                            <td>Απειροστικός Λογισμός ΙΙ</td>
                                            <td  width='5px'>Υ</td>
                                            <td>3</td>
                                            <td>8</td>
                                            <td>2</td>
                                            <td>Όχι</td>
                                            <td>Ναι</td>
                                            <td>17.03.2015</td>
                                            <td>16.09.2015</td>
                                            <td>6</td>
                                            <td>Ακύρωση</td>
                                        </tr>
                                        <tr>
                                            <td>331-2005</td>
                                            <td>Απειροστικός Λογισμός ΙΙ</td>
                                            <td  width='5px'>Υ</td>
                                            <td>5</td>
                                            <td>9</td>
                                            <td>2</td>
                                            <td>Όχι</td>
                                            <td>Ναι</td>
                                            <td>01.09.2016</td>
                                            <td>29.09.2016</td>
                                            <td>10</td>
                                            <td>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td>331-2054</td>
                                            <td>Πιθανότητες Ι</td>
                                            <td  width='5px'>Υ</td>
                                            <td>6</td>
                                            <td>8</td>
                                            <td>2</td>
                                            <td>Όχι</td>
                                            <td>Ναι</td>
                                            <td>20.03.2013</td>
                                            <td>26.06.2013</td>
                                            <td>10</td>
                                            <td>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td>331-2103</td>
                                            <td>Εισαγωγή στα Χρηματοοικονομικά Μαθηματικά</td>
                                            <td  width='5px'>Υ</td>
                                            <td>3</td>
                                            <td>5</td>
                                            <td>2</td>
                                            <td>Όχι</td>
                                            <td>Ναι</td>
                                            <td>30.10.2012</td>
                                            <td>14.01.2013</td>
                                            <td>9</td>
                                            <td>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td>331-2158</td>
                                            <td>Στατιστική Ι</td>
                                            <td  width='5px'>Υ</td>
                                            <td>4</td>
                                            <td>10</td>
                                            <td>2</td>
                                            <td>Όχι</td>
                                            <td>Ναι</td>
                                            <td>02.12.2013</td>
                                            <td>22.01.2014</td>
                                            <td>5</td>
                                            <td>Ακύρωση</td>
                                        </tr>
                                        <tr>
                                            <td>331-2158</td>
                                            <td>Στατιστική Ι</td>
                                            <td  width='5px'>Υ</td>
                                            <td>4</td>
                                            <td>10</td>
                                            <td>2</td>
                                            <td>Όχι</td>
                                            <td>Ναι</td>
                                            <td>29.08.2014</td>
                                            <td>11.09.2014</td>
                                            <td>8.5</td>
                                            <td>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td>331-2203</td>
                                            <td>Μακροοικονομική Θεωρία</td>
                                            <td  width='5px'>Υ</td>
                                            <td>6</td>
                                            <td>8</td>
                                            <td>2</td>
                                            <td>Όχι</td>
                                            <td>Ναι</td>
                                            <td>20.03.2013</td>
                                            <td>21.06.2013</td>
                                            <td>9</td>
                                            <td>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td>331-2306</td>
                                            <td>Πιθανότητες ΙΙ</td>
                                            <td  width='5px'>Υ</td>
                                            <td>4</td>
                                            <td>10</td>
                                            <td>2</td>
                                            <td>Όχι</td>
                                            <td>Ναι</td>
                                            <td>02.12.2013</td>
                                            <td>23.01.2014</td>
                                            <td>7</td>
                                            <td>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td>331-2353</td>
                                            <td>Συνήθεις Διαφορικές Εξισώσεις</td>
                                            <td  width='5px'>ΚΕΥ</td>
                                            <td>3</td>
                                            <td>5</td>
                                            <td>1.5</td>
                                            <td>Όχι</td>
                                            <td>Ναι</td>
                                            <td>12.03.2014</td>
                                            <td>18.06.2014</td>
                                            <td>10</td>
                                            <td>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td>331-2405</td>
                                            <td>Στοχαστικές Διαδικασίες Ι</td>
                                            <td  width='5px'>Υ</td>
                                            <td>3</td>
                                            <td>8</td>
                                            <td>2</td>
                                            <td>Όχι</td>
                                            <td>Ναι</td>
                                            <td>12.03.2014</td>
                                            <td>13.06.2014</td>
                                            <td>8</td>
                                            <td>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td>331-2454</td>
                                            <td>Στατιστική ΙΙ</td>
                                            <td  width='5px'>Υ</td>
                                            <td>3</td>
                                            <td>8</td>
                                            <td>2</td>
                                            <td>Ναι</td>
                                            <td>Ναι</td>
                                            <td>12.03.2014</td>
                                            <td>12.06.2014</td>
                                            <td>9</td>
                                            <td>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td>331-2706</td>
                                            <td>Μοντέλα Παλινδρόμησης</td>
                                            <td  width='5px'>Υ</td>
                                            <td>4</td>
                                            <td>10</td>
                                            <td>2</td>
                                            <td>Ναι</td>
                                            <td>Ναι</td>
                                            <td>01.09.2015</td>
                                            <td>03.09.2015</td>
                                            <td>9.5</td>
                                            <td>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td>331-2706</td>
                                            <td>Μοντέλα Παλινδρόμησης</td>
                                            <td  width='5px'>Υ</td>
                                            <td>4</td>
                                            <td>10</td>
                                            <td>2</td>
                                            <td>Ναι</td>
                                            <td>Ναι</td>
                                            <td>10.11.2014</td>
                                            <td>12.02.2015</td>
                                            <td>7.5</td>
                                            <td>Ακύρωση</td>
                                        </tr>
                                        <tr>
                                            <td>331-2754</td>
                                            <td>Στοχαστικές Διαδικασίες ΙΙ</td>
                                            <td  width='5px'>ΚΕΥ</td>
                                            <td>3</td>
                                            <td>5</td>
                                            <td>1.5</td>
                                            <td>Όχι</td>
                                            <td>Ναι</td>
                                            <td>10.11.2014</td>
                                            <td>04.02.2015</td>
                                            <td>9</td>
                                            <td>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td>331-2804</td>
                                            <td>Μικροοικονομική Θεωρία</td>
                                            <td  width='5px'>Υ</td>
                                            <td>3</td>
                                            <td>5</td>
                                            <td>2</td>
                                            <td>Όχι</td>
                                            <td>Ναι</td>
                                            <td>30.10.2012</td>
                                            <td>18.01.2013</td>
                                            <td>6</td>
                                            <td>Ακύρωση</td>
                                        </tr>
                                        <tr>
                                            <td>331-2806</td>
                                            <td>Μικροοικονομική Θεωρία I</td>
                                            <td  width='5px'>Υ</td>
                                            <td>5</td>
                                            <td>9</td>
                                            <td>2</td>
                                            <td>Όχι</td>
                                            <td>Ναι</td>
                                            <td>01.09.2016</td>
                                            <td>28.09.2016</td>
                                            <td>10</td>
                                            <td>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td>331-3005</td>
                                            <td>Χρηματοοικονομικά Μαθηματικά Ι</td>
                                            <td  width='5px'>Υ</td>
                                            <td>4</td>
                                            <td>10</td>
                                            <td>2</td>
                                            <td>Όχι</td>
                                            <td>Ναι</td>
                                            <td>10.11.2014</td>
                                            <td>10.02.2015</td>
                                            <td>10</td>
                                            <td>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td>331-3106</td>
                                            <td>Μαθηματικά Ασφαλίσεων Ζωής Ι</td>
                                            <td  width='5px'>Υ</td>
                                            <td>4</td>
                                            <td>10</td>
                                            <td>2</td>
                                            <td>Όχι</td>
                                            <td>Ναι</td>
                                            <td>02.12.2013</td>
                                            <td>06.02.2014</td>
                                            <td>5</td>
                                            <td>Ακύρωση</td>
                                        </tr>
                                        <tr>
                                            <td>331-3106</td>
                                            <td>Μαθηματικά Ασφαλίσεων Ζωής Ι</td>
                                            <td  width='5px'>Υ</td>
                                            <td>4</td>
                                            <td>10</td>
                                            <td>2</td>
                                            <td>Όχι</td>
                                            <td>Ναι</td>
                                            <td>29.08.2014</td>
                                            <td>09.09.2014</td>
                                            <td>8.5</td>
                                            <td>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td>331-3305</td>
                                            <td>Ανάλυση Διακύμανσης</td>
                                            <td  width='5px'>Υ</td>
                                            <td>3</td>
                                            <td>8</td>
                                            <td>2</td>
                                            <td>Ναι</td>
                                            <td>Ναι</td>
                                            <td>17.03.2015</td>
                                            <td>25.06.2015</td>
                                            <td>8.5</td>
                                            <td>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td>331-3305</td>
                                            <td>Ανάλυση Διακύμανσης</td>
                                            <td  width='5px'>Υ</td>
                                            <td>3</td>
                                            <td>8</td>
                                            <td>2</td>
                                            <td>Ναι</td>
                                            <td>Ναι</td>
                                            <td>01.09.2015</td>
                                            <td>02.10.2015</td>
                                            <td>8.5</td>
                                            <td>Ακύρωση</td>
                                        </tr>
                                        <tr>
                                            <td>331-3404</td>
                                            <td>Χρηματοοικονομικά Μαθηματικά ΙΙ</td>
                                            <td  width='5px'>ΚΕΥ</td>
                                            <td>3</td>
                                            <td>5</td>
                                            <td>1.5</td>
                                            <td>Ναι</td>
                                            <td>Ναι</td>
                                            <td>12.03.2014</td>
                                            <td>12.06.2014</td>
                                            <td>10</td>
                                            <td>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td>331-3553</td>
                                            <td>Εισαγωγή στη Διοικητική Τραπεζικών Κινδύνων</td>
                                            <td  width='5px'>ΚΕΥ</td>
                                            <td>3</td>
                                            <td>5</td>
                                            <td>1.5</td>
                                            <td>Όχι</td>
                                            <td>Ναι</td>
                                            <td>17.03.2015</td>
                                            <td>29.06.2015</td>
                                            <td>9</td>
                                            <td>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td>331-3707</td>
                                            <td>Ανάλυση Κατηγορικών Δεδομένων</td>
                                            <td  width='5px'>ΚΕΥ</td>
                                            <td>4</td>
                                            <td>6</td>
                                            <td>1.5</td>
                                            <td>Όχι</td>
                                            <td>Ναι</td>
                                            <td>30.11.2015</td>
                                            <td>17.02.2016</td>
                                            <td>7.5</td>
                                            <td>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td>331-4004</td>
                                            <td>Χρηματοοικονομικά Μαθηματικά ΙΙΙ</td>
                                            <td  width='5px'>Π</td>
                                            <td>3</td>
                                            <td>5</td>
                                            <td>1</td>
                                            <td>Όχι</td>
                                            <td>Ναι</td>
                                            <td>10.11.2014</td>
                                            <td>05.02.2015</td>
                                            <td>10</td>
                                            <td>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td>331-4204</td>
                                            <td>Εισαγωγή στην Στατιστική Κατά Bayes</td>
                                            <td  width='5px'>ΚΕΥ</td>
                                            <td>3</td>
                                            <td>5</td>
                                            <td>1.5</td>
                                            <td>Όχι</td>
                                            <td>Ναι</td>
                                            <td>17.03.2015</td>
                                            <td>23.06.2015</td>
                                            <td>8.5</td>
                                            <td>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td>331-4404</td>
                                            <td>Αντασφάλιση</td>
                                            <td  width='5px'>ΚΕΥ</td>
                                            <td>3</td>
                                            <td>5</td>
                                            <td>1.5</td>
                                            <td>Όχι</td>
                                            <td>Ναι</td>
                                            <td>17.03.2015</td>
                                            <td>25.06.2015</td>
                                            <td>10</td>
                                            <td>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td>331-4455</td>
                                            <td>Οικονομετρία</td>
                                            <td  width='5px'>Υ</td>
                                            <td>4</td>
                                            <td>10</td>
                                            <td>2</td>
                                            <td>Ναι</td>
                                            <td>Ναι</td>
                                            <td>17.03.2015</td>
                                            <td>09.06.2015</td>
                                            <td>8.5</td>
                                            <td>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td>331-4654</td>
                                            <td>Πτυχιακή Εργασία</td>
                                            <td  width='5px'>Ε</td>
                                            <td>12</td>
                                            <td>15</td>
                                            <td>4</td>
                                            <td>Όχι</td>
                                            <td>Ναι</td>
                                            <td>15.03.2016</td>
                                            <td>29.06.2016</td>
                                            <td>10</td>
                                            <td>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td>331-4705</td>
                                            <td>Μαθηματικά Γενικών Ασφαλίσεων Ι</td>
                                            <td  width='5px'>Υ</td>
                                            <td>3</td>
                                            <td>8</td>
                                            <td>2</td>
                                            <td>Όχι</td>
                                            <td>Ναι</td>
                                            <td>10.11.2014</td>
                                            <td>17.02.2015</td>
                                            <td>10</td>
                                            <td>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td>331-6004</td>
                                            <td>Ανάλυση Θνησιμότητας</td>
                                            <td  width='5px'>Υ</td>
                                            <td>3</td>
                                            <td>8</td>
                                            <td>2</td>
                                            <td>Ναι</td>
                                            <td>Ναι</td>
                                            <td>12.03.2014</td>
                                            <td>20.06.2014</td>
                                            <td>10</td>
                                            <td>Επιτυχία</td>
                                        </tr>
                                        <tr>
                                            <td>331-9204</td>
                                            <td>Στατιστικά Πακέτα και Ανάλυση Δεδομένων</td>
                                            <td  width='5px'>KEΥ</td>
                                            <td>4</td>
                                            <td>6</td>
                                            <td>1.5</td>
                                            <td>Ναι</td>
                                            <td>Ναι</td>
                                            <td>15.03.2016</td>
                                            <td>28.06.2016</td>
                                            <td>10</td>
                                            <td>Επιτυχία</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </table>
                            <table border="0" width="45%" align="center">
                                <tr>
                                    <td width="50%">
                                        <b>Επιτυχή μαθήματα:</b>(Υπολ.Πτυχ.:Ναι)
                                    </td>
                                    <td>36 &nbsp;&nbsp;&nbsp;   (
                                        <b>Υ</b> = 24
                                        <b>ΚΕΥ</b> = 7
                                        <b>Π/Ε</b> = 2 )
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Σύνολο διδ. μονάδων:</b>
                                    </td>
                                    <td>126</td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Σύνολο ECTS:</b>
                                    </td>
                                    <td>244</td>
                                </tr>
                            </table>
                        </div>
                        <!-- /.box-body -->
                
                    </div>
                    <!-- /.box -->

              
                </div>
                <!-- finish 3rd /.tab-pane -->
            
            </div>
            <!-- /.tab-content -->
          
        </div>
        <!-- nav-tabs-custom -->
        <!-- AMKA hidden form -->

        
    </section>
    <!-- /.content -->
      
</div>
<!-- /.container -->
    
</div>
<!-- /.content-wrapper -->
<footer class="main-footer">
    <div class="container">
        <div class="pull-right hidden-md">
            <span style="font-size: 12px !important;">, Καρλόβασι 832 00, Τηλ.: 22730 82300, FAX: 22730 82309, email: 
                <a href="mailto:dsas@aegean.gr">dsas@aegean.gr</a> &nbsp;::&nbsp; Υπεύθυνος Ιστοσελίδας: Παπαλουκάς Νίκος.
            </span>
        </div>
        <strong>Copyright &copy; 2015-16, Τμ. Μαθηματικών.</strong>
    </div>
    <!-- /.container -->
    
</footer>
</div>
<!-- ./wrapper -->
<!-- jQuery 2.1.4 -->
<script src="plugins/jQuery/jQuery-2.1.4.min.js"></script>
<!-- Bootstrap 3.3.5 -->
<script src="bootstrap/js/bootstrap.min.js"></script>
<!-- DataTables -->
<script src="plugins/datatables/jquery.dataTables.min.js"></script>
<script src="plugins/datatables/dataTables.bootstrap.min.js"></script>
<!-- SlimScroll -->
<script src="plugins/slimScroll/jquery.slimscroll.min.js"></script>
<!-- FastClick -->
<script src="plugins/fastclick/fastclick.min.js"></script>
<!-- AdminLTE App -->
<script src="dist/js/app.min.js"></script>
<!-- AdminLTE for demo purposes -->
<script src="dist/js/demo.js"></script>
<script>
    $(function () {
      $("#example1").DataTable({
        "ordering": true,
        language: {
          url: 'plugins/datatables/localisation/Greek.json'
        }
      });
      $('#example2').DataTable({
        "paging": false,
        "lengthChange": false,
        "searching": false,
        "ordering": false,
        "info": false,
        "autoWidth": false
      });
      $('#example3').DataTable({
        "paging": false,
        "lengthChange": false,
        "searching": false,
        "ordering": false,
        "info": false,
        "autoWidth": true,
        "columnDefs": [
          { "width": "20px", "targets": 0 },
          // { "width": "130px", "targets": 1 },
          { "width": "10px", "targets": 2 },
          { "width": "10px", "targets": 3 },
          { "width": "10px", "targets": 4 },
          { "width": "20px", "targets": 5 },
          { "width": "30px", "targets": 6 },
          { "width": "15px", "targets": 7 },
          { "width": "30px", "targets": 8 },
          { "width": "30px", "targets": 9 },
          { "width": "15px", "targets": 10 },
          { "width": "50px", "targets": 11 }
        ]
      });
    });

    $(document).ready(function() {
      var table = $('#example').DataTable({
        "columnDefs": [
        { "visible": false, "targets": 7},
        { "visible": false, "targets": 8}
        ],
        "order": [[ 7, 'desc' ]],
        "searching": false,
        "displayLength": 25,
        "drawCallback": function ( settings ) {
          var api = this.api();
          var rows = api.rows( {page:'current'} ).nodes();
          var last=null;

          api.column(8, {page:'current'} ).data().each( function ( group, i ) {
            if ( last !== group ) {
              $(rows).eq( i ).before(
                '
    <tr class="group">
        <td colspan="8">'+group+'</td>
    </tr>'
                );

              last = group;
            }
          });
        },
        language: {
          url: 'plugins/datatables/localisation/Greek.json'
        }
      } );

          // Order by the grouping
          $('#example tbody').on( 'click', 'tr.group', function () {
            var currentOrder = table.order()[0];
            if ( currentOrder[0] === 2 && currentOrder[1] === 'asc' ) {
              table.order( [ 2, 'desc' ] ).draw();
            }
            else {
              table.order( [ 2, 'asc' ] ).draw();
            }
          });
        });
</script>
</body>
</html>
`


export default html;