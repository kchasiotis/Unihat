const html = `<body class="skin-blue layout-top-nav">
        <div class="wrapper">

          <header class="main-header">
            <nav class="navbar navbar-static-top">
              <div class="container">
                <div class="navbar-header">
                  <a href="http://www.math.aegean.gr" class="navbar-brand" style="margin-top: -10px !important;"><b>Πανεπιστήμιο Αιγαίου</b><br>Τμήμα Μαθηματικών</a>
                  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
                    <i class="fa fa-bars"></i>
                  </button>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse pull-left" id="navbar-collapse">
                  <ul class="nav navbar-nav">
                    <li class="active"><a href="main.php">Αναλυτική<span class="sr-only">(current)</span></a></li>
                    <li><a href="request.php">Αιτήσεις</a></li>
                    <li><a href="courses.php">Δηλώσεις</a></li>
<!--                 <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">Δηλώσεις <span class="caret"></span></a>
                  <ul class="dropdown-menu" role="menu">
                    <li><a href="#">Νέα Δήλωση</a></li>
                    <li><a href="#">Διαγραφή Δήλωσης</a></li>
                    <li><a href="#">Εκτύπωση Δήλωσης</a></li>
                  </ul>
                </li> -->
                <li><a href="links.php">Συνδέσεις</a></li>
                <li><a href="exit.php">Αποσύνδεση</a></li>
              </ul>
            </div><!-- /.navbar-collapse -->
            <!-- Navbar Right Menu -->
            <div class="navbar-custom-menu" style="margin-top: 10px; font-size: 14px; font-weight: bold; color: #f7e9c3; text-align: center;">
              Εισαγωγική Κατεύθυνση: <br>"Μαθηματικών"
            </div><!-- /.navbar-custom-menu -->
          </div><!-- /.container-fluid -->
        </nav>
      </header>

      <!-- Full Width Column -->
      <div class="content-wrapper" style="min-height: 493px;">
        <div class="container">
<!--           <section class="content-header">
            <h1>Αίτηση</h1>
          </section> -->

          <!-- Main content -->
          <section class="content">
            <!-- Custom Tabs -->
            <div class="nav-tabs-custom">
              <ul class="nav nav-tabs">
                <li class="active"><a href="#tab_1" data-toggle="tab">Αναλυτική</a></li>
                <li><a href="#tab_2" data-toggle="tab">Δηλώσεις μαθημάτων</a></li>
                <li><a href="#tab_3" data-toggle="tab">Περασμένα</a></li>
              </ul>
              <div class="tab-content">
                <div class="tab-pane active" id="tab_1">
                  <div class="box">
                    <div class="box-body table-responsive no-padding">
                      <div id="example1_wrapper" class="dataTables_wrapper form-inline dt-bootstrap no-footer"><div class="row"><div class="col-sm-6"><div class="dataTables_length" id="example1_length"><label>Δείξε <select name="example1_length" aria-controls="example1" class="form-control input-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> εγγραφές</label></div></div><div class="col-sm-6"><div id="example1_filter" class="dataTables_filter"><label>Αναζήτηση:<input type="search" class="form-control input-sm" placeholder="" aria-controls="example1"></label></div></div></div><div class="row"><div class="col-sm-12"><table id="example1" class="table table-bordered table-striped dataTable no-footer" style="font-size: 13px;" role="grid" aria-describedby="example1_info">
                        <thead>
                          <tr role="row"><th class="hidden-xs sorting_asc" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Κωδικός: activate to sort column descending" style="width: 66px;">Κωδικός</th><th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Τίτλος Μαθήματος: activate to sort column ascending" style="width: 341px;">Τίτλος Μαθήματος</th><th class="hidden-xs sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Ημ/νία δήλωσης: activate to sort column ascending" style="width: 119px;">Ημ/νία δήλωσης</th><th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Ημ/νια Εξέτ: activate to sort column ascending" style="width: 87px;">Ημ/νια Εξέτ</th><th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Βαθμός: activate to sort column ascending" style="width: 60px;">Βαθμός</th><th class="hidden-xs sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Χαρακτηρισμός: activate to sort column ascending" style="width: 116px;">Χαρακτηρισμός</th></tr>
                        </thead>
                        <tbody>
                                                  <tr role="row" class="odd"><td class="hidden-xs sorting_1">311-0011</td><td>ΑΠΕΙΡΟΣΤΙΚΟΣ ΛΟΓΙΣΜΟΣ Ι</td><td class="hidden-xs"><span class="hiddenDate">2014-10-30 00:00:00</span>30.10.2014</td><td><span class="hiddenDate">2015-09-09 00:00:00</span>09.09.2015</td><td>5.5</td><td class="hidden-xs">Επιτυχία</td></tr><tr role="row" class="even"><td class="hidden-xs sorting_1">311-0011</td><td>ΑΠΕΙΡΟΣΤΙΚΟΣ ΛΟΓΙΣΜΟΣ Ι</td><td class="hidden-xs"><span class="hiddenDate">2014-10-30 00:00:00</span>30.10.2014</td><td><span class="hiddenDate">2015-01-28 00:00:00</span>28.01.2015</td><td>1</td><td class="hidden-xs">Αποτυχία</td></tr><tr role="row" class="odd"><td class="hidden-xs sorting_1">311-0011</td><td>ΑΠΕΙΡΟΣΤΙΚΟΣ ΛΟΓΙΣΜΟΣ Ι</td><td class="hidden-xs"><span class="hiddenDate">2013-10-30 00:00:00</span>30.10.2013</td><td><span class="hiddenDate">2014-09-09 00:00:00</span>09.09.2014</td><td>1</td><td class="hidden-xs">Αποτυχία</td></tr><tr role="row" class="even"><td class="hidden-xs sorting_1">311-0011</td><td>ΑΠΕΙΡΟΣΤΙΚΟΣ ΛΟΓΙΣΜΟΣ Ι</td><td class="hidden-xs"><span class="hiddenDate">2013-10-30 00:00:00</span>30.10.2013</td><td><span class="hiddenDate">2014-01-29 00:00:00</span>29.01.2014</td><td>1</td><td class="hidden-xs">Αποτυχία</td></tr><tr role="row" class="odd"><td class="hidden-xs sorting_1">311-0024</td><td>ΑΛΓΕΒΡΑ</td><td class="hidden-xs"><span class="hiddenDate">2016-10-30 00:00:00</span>30.10.2016</td><td><span class="hiddenDate">2017-02-13 00:00:00</span>13.02.2017</td><td>3</td><td class="hidden-xs">Αποτυχία</td></tr><tr role="row" class="even"><td class="hidden-xs sorting_1">311-0024</td><td>ΑΛΓΕΒΡΑ</td><td class="hidden-xs"><span class="hiddenDate">2015-10-30 00:00:00</span>30.10.2015</td><td><span class="hiddenDate">2016-02-10 00:00:00</span>10.02.2016</td><td>0</td><td class="hidden-xs">Αποτυχία</td></tr><tr role="row" class="odd"><td class="hidden-xs sorting_1">311-0024</td><td>ΑΛΓΕΒΡΑ</td><td class="hidden-xs"><span class="hiddenDate">2014-10-30 00:00:00</span>30.10.2014</td><td><span class="hiddenDate"></span></td><td></td><td class="hidden-xs">Δεν δόθηκε</td></tr><tr role="row" class="even"><td class="hidden-xs sorting_1">311-0035</td><td>ΓΡΑΜΜΙΚΗ ΑΛΓΕΒΡΑ &amp; ΑΝΑΛΥΤΙΚΗ ΓΕΩΜΕΤΡΙΑ</td><td class="hidden-xs"><span class="hiddenDate">2013-10-30 00:00:00</span>30.10.2013</td><td><span class="hiddenDate">2014-09-23 00:00:00</span>23.09.2014</td><td>0</td><td class="hidden-xs">Αποτυχία</td></tr><tr role="row" class="odd"><td class="hidden-xs sorting_1">311-0037</td><td>ΓΡΑΜΜΙΚΗ ΑΛΓΕΒΡΑ Ι</td><td class="hidden-xs"><span class="hiddenDate">2016-10-30 00:00:00</span>30.10.2016</td><td><span class="hiddenDate">2017-02-15 00:00:00</span>15.02.2017</td><td>0.5</td><td class="hidden-xs">Αποτυχία</td></tr><tr role="row" class="even"><td class="hidden-xs sorting_1">311-0037</td><td>ΓΡΑΜΜΙΚΗ ΑΛΓΕΒΡΑ Ι</td><td class="hidden-xs"><span class="hiddenDate">2015-10-30 00:00:00</span>30.10.2015</td><td><span class="hiddenDate"></span></td><td></td><td class="hidden-xs">Δεν δόθηκε</td></tr><tr role="row" class="odd"><td class="hidden-xs sorting_1">311-0037</td><td>ΓΡΑΜΜΙΚΗ ΑΛΓΕΒΡΑ Ι</td><td class="hidden-xs"><span class="hiddenDate">2014-10-30 00:00:00</span>30.10.2014</td><td><span class="hiddenDate">2015-09-04 00:00:00</span>04.09.2015</td><td>0</td><td class="hidden-xs">Αποτυχία</td></tr><tr role="row" class="even"><td class="hidden-xs sorting_1">311-0044</td><td>ΕΙΣΑΓΩΓΗ ΣΤΗΝ ΠΛΗΡΟΦΟΡΙΚΗ</td><td class="hidden-xs"><span class="hiddenDate">2016-03-15 00:00:00</span>15.03.2016</td><td><span class="hiddenDate">2016-06-15 00:00:00</span>15.06.2016</td><td>5.5</td><td class="hidden-xs">Επιτυχία</td></tr><tr role="row" class="odd"><td class="hidden-xs sorting_1">311-0044</td><td>ΕΙΣΑΓΩΓΗ ΣΤΗΝ ΠΛΗΡΟΦΟΡΙΚΗ</td><td class="hidden-xs"><span class="hiddenDate">2015-03-15 00:00:00</span>15.03.2015</td><td><span class="hiddenDate"></span></td><td></td><td class="hidden-xs">Δεν δόθηκε</td></tr><tr role="row" class="even"><td class="hidden-xs sorting_1">311-0044</td><td>ΕΙΣΑΓΩΓΗ ΣΤΗΝ ΠΛΗΡΟΦΟΡΙΚΗ</td><td class="hidden-xs"><span class="hiddenDate">2014-03-15 00:00:00</span>15.03.2014</td><td><span class="hiddenDate">2014-06-13 00:00:00</span>13.06.2014</td><td>0</td><td class="hidden-xs">Αποτυχία</td></tr><tr role="row" class="odd"><td class="hidden-xs sorting_1">311-0071</td><td>ΑΠΕΙΡΟΣΤΙΚΟΣ ΛΟΓΙΣΜΟΣ ΙΙ</td><td class="hidden-xs"><span class="hiddenDate">2016-03-15 00:00:00</span>15.03.2016</td><td><span class="hiddenDate">2016-06-21 00:00:00</span>21.06.2016</td><td>5</td><td class="hidden-xs">Επιτυχία</td></tr><tr role="row" class="even"><td class="hidden-xs sorting_1">311-0071</td><td>ΑΠΕΙΡΟΣΤΙΚΟΣ ΛΟΓΙΣΜΟΣ ΙΙ</td><td class="hidden-xs"><span class="hiddenDate">2015-03-15 00:00:00</span>15.03.2015</td><td><span class="hiddenDate"></span></td><td></td><td class="hidden-xs">Δεν δόθηκε</td></tr><tr role="row" class="odd"><td class="hidden-xs sorting_1">311-0071</td><td>ΑΠΕΙΡΟΣΤΙΚΟΣ ΛΟΓΙΣΜΟΣ ΙΙ</td><td class="hidden-xs"><span class="hiddenDate">2014-03-15 00:00:00</span>15.03.2014</td><td><span class="hiddenDate">2014-09-12 00:00:00</span>12.09.2014</td><td>0</td><td class="hidden-xs">Αποτυχία</td></tr><tr role="row" class="even"><td class="hidden-xs sorting_1">311-0082</td><td>ΓΡΑΜΜΙΚΗ ΑΛΓΕΒΡΑ Ι</td><td class="hidden-xs"><span class="hiddenDate">2014-03-15 00:00:00</span>15.03.2014</td><td><span class="hiddenDate"></span></td><td></td><td class="hidden-xs">Δεν δόθηκε</td></tr><tr role="row" class="odd"><td class="hidden-xs sorting_1">311-0084</td><td>ΓΡΑΜΜΙΚΗ ΑΛΓΕΒΡΑ ΙΙ</td><td class="hidden-xs"><span class="hiddenDate">2017-03-15 00:00:00</span>15.03.2017</td><td><span class="hiddenDate"></span></td><td></td><td class="hidden-xs">Δεν δόθηκε</td></tr><tr role="row" class="even"><td class="hidden-xs sorting_1">311-0084</td><td>ΓΡΑΜΜΙΚΗ ΑΛΓΕΒΡΑ ΙΙ</td><td class="hidden-xs"><span class="hiddenDate">2016-03-15 00:00:00</span>15.03.2016</td><td><span class="hiddenDate"></span></td><td></td><td class="hidden-xs">Δεν δόθηκε</td></tr><tr role="row" class="odd"><td class="hidden-xs sorting_1">311-0084</td><td>ΓΡΑΜΜΙΚΗ ΑΛΓΕΒΡΑ ΙΙ</td><td class="hidden-xs"><span class="hiddenDate">2015-03-15 00:00:00</span>15.03.2015</td><td><span class="hiddenDate"></span></td><td></td><td class="hidden-xs">Δεν δόθηκε</td></tr><tr role="row" class="even"><td class="hidden-xs sorting_1">311-0106</td><td>ΓΛΩΣΣΕΣ ΠΡΟΓΡΑΜΜΑΤΙΣΜΟΥ</td><td class="hidden-xs"><span class="hiddenDate">2016-10-30 00:00:00</span>30.10.2016</td><td><span class="hiddenDate">2017-02-16 00:00:00</span>16.02.2017</td><td>7</td><td class="hidden-xs">Επιτυχία</td></tr><tr role="row" class="odd"><td class="hidden-xs sorting_1">311-0134</td><td>ΣΥΝΗΘΕΙΣ ΔΙΑΦΟΡΙΚΕΣ ΕΞΙΣΩΣΕΙΣ Ι</td><td class="hidden-xs"><span class="hiddenDate">2017-03-15 00:00:00</span>15.03.2017</td><td><span class="hiddenDate"></span></td><td></td><td class="hidden-xs">Δεν δόθηκε</td></tr><tr role="row" class="even"><td class="hidden-xs sorting_1">311-0134</td><td>ΣΥΝΗΘΕΙΣ ΔΙΑΦΟΡΙΚΕΣ ΕΞΙΣΩΣΕΙΣ Ι</td><td class="hidden-xs"><span class="hiddenDate">2016-03-15 00:00:00</span>15.03.2016</td><td><span class="hiddenDate"></span></td><td></td><td class="hidden-xs">Δεν δόθηκε</td></tr><tr role="row" class="odd"><td class="hidden-xs sorting_1">311-0162</td><td>ΠΙΘΑΝΟΤΗΤΕΣ</td><td class="hidden-xs"><span class="hiddenDate">2016-10-30 00:00:00</span>30.10.2016</td><td><span class="hiddenDate">2017-02-08 00:00:00</span>08.02.2017</td><td>6</td><td class="hidden-xs">Επιτυχία</td></tr><tr role="row" class="even"><td class="hidden-xs sorting_1">311-0186</td><td>ΔΙΑΚΡΙΤΑ ΜΑΘΗΜΑΤΙΚΑ</td><td class="hidden-xs"><span class="hiddenDate">2016-10-30 00:00:00</span>30.10.2016</td><td><span class="hiddenDate"></span></td><td></td><td class="hidden-xs">Δεν δόθηκε</td></tr><tr role="row" class="odd"><td class="hidden-xs sorting_1">311-0186</td><td>ΔΙΑΚΡΙΤΑ ΜΑΘΗΜΑΤΙΚΑ</td><td class="hidden-xs"><span class="hiddenDate">2014-10-30 00:00:00</span>30.10.2014</td><td><span class="hiddenDate"></span></td><td></td><td class="hidden-xs">Δεν δόθηκε</td></tr><tr role="row" class="even"><td class="hidden-xs sorting_1">311-0194</td><td>ΑΝΑΛΥΣΗ Ι</td><td class="hidden-xs"><span class="hiddenDate">2016-10-30 00:00:00</span>30.10.2016</td><td><span class="hiddenDate">2017-02-06 00:00:00</span>06.02.2017</td><td>1</td><td class="hidden-xs">Αποτυχία</td></tr><tr role="row" class="odd"><td class="hidden-xs sorting_1">311-0194</td><td>ΑΝΑΛΥΣΗ Ι</td><td class="hidden-xs"><span class="hiddenDate">2015-10-30 00:00:00</span>30.10.2015</td><td><span class="hiddenDate"></span></td><td></td><td class="hidden-xs">Δεν δόθηκε</td></tr><tr role="row" class="even"><td class="hidden-xs sorting_1">311-0238</td><td>ΣΤΑΤΙΣΤΙΚΗ</td><td class="hidden-xs"><span class="hiddenDate">2017-03-15 00:00:00</span>15.03.2017</td><td><span class="hiddenDate"></span></td><td></td><td class="hidden-xs">Δεν δόθηκε</td></tr><tr role="row" class="odd"><td class="hidden-xs sorting_1">311-0256</td><td>ΜΙΓΑΔΙΚΗ ΑΝΑΛΥΣΗ</td><td class="hidden-xs"><span class="hiddenDate">2015-10-30 00:00:00</span>30.10.2015</td><td><span class="hiddenDate"></span></td><td></td><td class="hidden-xs">Δεν δόθηκε</td></tr><tr role="row" class="even"><td class="hidden-xs sorting_1">311-0257</td><td>ΜΙΓΑΔΙΚΗ ΑΝΑΛΥΣΗ</td><td class="hidden-xs"><span class="hiddenDate">2017-03-15 00:00:00</span>15.03.2017</td><td><span class="hiddenDate"></span></td><td></td><td class="hidden-xs">Δεν δόθηκε</td></tr><tr role="row" class="odd"><td class="hidden-xs sorting_1">311-0296</td><td>ΑΝΑΛΥΣΗ ΙΙ</td><td class="hidden-xs"><span class="hiddenDate">2017-03-15 00:00:00</span>15.03.2017</td><td><span class="hiddenDate"></span></td><td></td><td class="hidden-xs">Δεν δόθηκε</td></tr><tr role="row" class="even"><td class="hidden-xs sorting_1">311-0298</td><td>ΑΝΑΛΥΣΗ ΙΙ</td><td class="hidden-xs"><span class="hiddenDate">2016-03-15 00:00:00</span>15.03.2016</td><td><span class="hiddenDate"></span></td><td></td><td class="hidden-xs">Δεν δόθηκε</td></tr><tr role="row" class="odd"><td class="hidden-xs sorting_1">311-0298</td><td>ΑΝΑΛΥΣΗ ΙΙ</td><td class="hidden-xs"><span class="hiddenDate">2015-03-15 00:00:00</span>15.03.2015</td><td><span class="hiddenDate"></span></td><td></td><td class="hidden-xs">Δεν δόθηκε</td></tr><tr role="row" class="even"><td class="hidden-xs sorting_1">311-0318</td><td>ΣΥΝΗΘΕΙΣ ΔΙΑΦΟΡΙΚΕΣ  ΕΞΙΣΩΣΕΙΣ ΙΙ</td><td class="hidden-xs"><span class="hiddenDate">2015-03-15 00:00:00</span>15.03.2015</td><td><span class="hiddenDate"></span></td><td></td><td class="hidden-xs">Δεν δόθηκε</td></tr><tr role="row" class="odd"><td class="hidden-xs sorting_1">311-0334</td><td>ΜΑΘΗΜΑΤΙΚΗ ΛΟΓΙΚΗ</td><td class="hidden-xs"><span class="hiddenDate">2017-03-15 00:00:00</span>15.03.2017</td><td><span class="hiddenDate"></span></td><td></td><td class="hidden-xs">Δεν δόθηκε</td></tr><tr role="row" class="even"><td class="hidden-xs sorting_1">311-0542</td><td>ΣΥΝΟΛΑ ΚΑΙ ΑΡΙΘΜΟΙ</td><td class="hidden-xs"><span class="hiddenDate">2015-10-30 00:00:00</span>30.10.2015</td><td><span class="hiddenDate">2016-02-08 00:00:00</span>08.02.2016</td><td>5</td><td class="hidden-xs">Επιτυχία</td></tr><tr role="row" class="odd"><td class="hidden-xs sorting_1">311-0542</td><td>ΣΥΝΟΛΑ ΚΑΙ ΑΡΙΘΜΟΙ</td><td class="hidden-xs"><span class="hiddenDate">2014-10-30 00:00:00</span>30.10.2014</td><td><span class="hiddenDate">2015-09-01 00:00:00</span>01.09.2015</td><td>2</td><td class="hidden-xs">Αποτυχία</td></tr><tr role="row" class="even"><td class="hidden-xs sorting_1">311-0542</td><td>ΣΥΝΟΛΑ ΚΑΙ ΑΡΙΘΜΟΙ</td><td class="hidden-xs"><span class="hiddenDate">2013-10-30 00:00:00</span>30.10.2013</td><td><span class="hiddenDate">2014-09-03 00:00:00</span>03.09.2014</td><td>3.5</td><td class="hidden-xs">Αποτυχία</td></tr><tr role="row" class="odd"><td class="hidden-xs sorting_1">311-0551</td><td>ΑΠΕΙΡΟΣΤΙΚΟΣ ΛΟΓΙΣΜΟΣ ΙΙΙ</td><td class="hidden-xs"><span class="hiddenDate">2016-10-30 00:00:00</span>30.10.2016</td><td><span class="hiddenDate"></span></td><td></td><td class="hidden-xs">Δεν δόθηκε</td></tr><tr role="row" class="even"><td class="hidden-xs sorting_1">311-0551</td><td>ΑΠΕΙΡΟΣΤΙΚΟΣ ΛΟΓΙΣΜΟΣ ΙΙΙ</td><td class="hidden-xs"><span class="hiddenDate">2015-10-30 00:00:00</span>30.10.2015</td><td><span class="hiddenDate"></span></td><td></td><td class="hidden-xs">Δεν δόθηκε</td></tr><tr role="row" class="odd"><td class="hidden-xs sorting_1">311-0551</td><td>ΑΠΕΙΡΟΣΤΙΚΟΣ ΛΟΓΙΣΜΟΣ ΙΙΙ</td><td class="hidden-xs"><span class="hiddenDate">2014-10-30 00:00:00</span>30.10.2014</td><td><span class="hiddenDate"></span></td><td></td><td class="hidden-xs">Δεν δόθηκε</td></tr><tr role="row" class="even"><td class="hidden-xs sorting_1">311-0562</td><td>ΦΥΣΙΚΗ Ι</td><td class="hidden-xs"><span class="hiddenDate">2016-10-30 00:00:00</span>30.10.2016</td><td><span class="hiddenDate"></span></td><td></td><td class="hidden-xs">Δεν δόθηκε</td></tr><tr role="row" class="odd"><td class="hidden-xs sorting_1">311-0571</td><td>ΑΠΕΙΡΟΣΤΙΚΟΣ ΛΟΓΙΣΜΟΣ IV</td><td class="hidden-xs"><span class="hiddenDate">2017-03-15 00:00:00</span>15.03.2017</td><td><span class="hiddenDate">2017-06-12 00:00:00</span>12.06.2017</td><td>2</td><td class="hidden-xs">Αποτυχία</td></tr><tr role="row" class="even"><td class="hidden-xs sorting_1">311-0571</td><td>ΑΠΕΙΡΟΣΤΙΚΟΣ ΛΟΓΙΣΜΟΣ IV</td><td class="hidden-xs"><span class="hiddenDate">2016-03-15 00:00:00</span>15.03.2016</td><td><span class="hiddenDate"></span></td><td></td><td class="hidden-xs">Δεν δόθηκε</td></tr><tr role="row" class="odd"><td class="hidden-xs sorting_1">311-0571</td><td>ΑΠΕΙΡΟΣΤΙΚΟΣ ΛΟΓΙΣΜΟΣ IV</td><td class="hidden-xs"><span class="hiddenDate">2015-03-15 00:00:00</span>15.03.2015</td><td><span class="hiddenDate"></span></td><td></td><td class="hidden-xs">Δεν δόθηκε</td></tr><tr role="row" class="even"><td class="hidden-xs sorting_1">311-1550</td><td>ΑΓΓΛΙΚΑ ΓΙΑ ΜΑΘΗΜΑΤΙΚΑ ΙΙ - ΙΙΙ</td><td class="hidden-xs"><span class="hiddenDate">2014-09-02 00:00:00</span>02.09.2014</td><td><span class="hiddenDate">2014-09-03 00:00:00</span>03.09.2014</td><td>7</td><td class="hidden-xs">Επιτυχία</td></tr><tr role="row" class="odd"><td class="hidden-xs sorting_1">311-1650</td><td>ΑΓΓΛΙΚΑ ΓΙΑ ΜΑΘΗΜΑΤΙΚΑ ΙΙ</td><td class="hidden-xs"><span class="hiddenDate">2013-10-30 00:00:00</span>30.10.2013</td><td><span class="hiddenDate">2014-02-03 00:00:00</span>03.02.2014</td><td>8.5</td><td class="hidden-xs">Επιτυχία</td></tr><tr role="row" class="even"><td class="hidden-xs sorting_1">311-1700</td><td>ΑΓΓΛΙΚΑ ΓΙΑ ΜΑΘΗΜΑΤΙΚΑ ΙΙΙ</td><td class="hidden-xs"><span class="hiddenDate">2014-03-15 00:00:00</span>15.03.2014</td><td><span class="hiddenDate">2014-09-02 00:00:00</span>02.09.2014</td><td>5.5</td><td class="hidden-xs">Επιτυχία</td></tr><tr role="row" class="odd"><td class="hidden-xs sorting_1">311-2303</td><td>ΔΙΔΑΚΤΙΚΗ ΕΥΚΛΕΙΔΕΙΑΣ ΓΕΩΜΕΤΡΙΑΣ</td><td class="hidden-xs"><span class="hiddenDate">2015-10-30 00:00:00</span>30.10.2015</td><td><span class="hiddenDate">2016-09-08 00:00:00</span>08.09.2016</td><td>8</td><td class="hidden-xs">Επιτυχία</td></tr><tr role="row" class="even"><td class="hidden-xs sorting_1">311-2353</td><td>ΝΕΕΣ ΤΕΧΝΟΛΟΓΙΕΣ ΣΤΗΝ ΕΚΠΑΙΔΕΥΣΗ</td><td class="hidden-xs"><span class="hiddenDate">2016-10-30 00:00:00</span>30.10.2016</td><td><span class="hiddenDate">2017-02-09 00:00:00</span>09.02.2017</td><td>6</td><td class="hidden-xs">Επιτυχία</td></tr><tr role="row" class="odd"><td class="hidden-xs sorting_1">311-2850</td><td>ΙΣΤΟΡΙΑ ΕΥΚΛΕΙΔΕΙΩΝ ΚΑΙ ΜΗ ΕΥΚΛΕΙΔΕΙΩΝ ΓΕΩΜΕΤΡΙΩΝ</td><td class="hidden-xs"><span class="hiddenDate">2016-03-15 00:00:00</span>15.03.2016</td><td><span class="hiddenDate">2016-06-23 00:00:00</span>23.06.2016</td><td>6</td><td class="hidden-xs">Επιτυχία</td></tr><tr role="row" class="even"><td class="hidden-xs sorting_1">311-3101</td><td>ΠΡΟΧΩΡΗΜΕΝΕΣ ΓΛΩΣΣΕΣ ΠΡΟΓΡΑΜΜΑΤΙΣΜΟΥ</td><td class="hidden-xs"><span class="hiddenDate">2017-03-15 00:00:00</span>15.03.2017</td><td><span class="hiddenDate"></span></td><td></td><td class="hidden-xs">Δεν δόθηκε</td></tr><tr role="row" class="odd"><td class="hidden-xs sorting_1">321-2551</td><td>ΘΕΩΡΙΑ  ΚΥΚΛΩΜΑΤΩΝ</td><td class="hidden-xs"><span class="hiddenDate">2017-03-15 00:00:00</span>15.03.2017</td><td><span class="hiddenDate"></span></td><td></td><td class="hidden-xs">Δεν δόθηκε</td></tr><tr role="row" class="even"><td class="hidden-xs sorting_1">331-2105</td><td>ΕΙΣΑΓΩΓΗ ΣΤΑ ΧΡΗΜΑΤΟΟΙΚΟΝΟΜΙΚΑ ΜΑΘΗΜΑΤΙΚΑ</td><td class="hidden-xs"><span class="hiddenDate">2016-10-30 00:00:00</span>30.10.2016</td><td><span class="hiddenDate"></span></td><td></td><td class="hidden-xs">Δεν δόθηκε</td></tr><tr role="row" class="odd"><td class="hidden-xs sorting_1">331-2406</td><td>ΣΤΟΧΑΣΤΙΚΕΣ ΔΙΑΔΙΚΑΣΙΕΣ</td><td class="hidden-xs"><span class="hiddenDate">2017-03-15 00:00:00</span>15.03.2017</td><td><span class="hiddenDate">2017-06-14 00:00:00</span>14.06.2017</td><td>6</td><td class="hidden-xs">Επιτυχία</td></tr><tr role="row" class="even"><td class="hidden-xs sorting_1">331-2806</td><td>ΜΙΚΡΟΟΙΚΟΝΟΜΙΚΗ ΘΕΩΡΙΑ</td><td class="hidden-xs"><span class="hiddenDate">2016-10-30 00:00:00</span>30.10.2016</td><td><span class="hiddenDate"></span></td><td></td><td class="hidden-xs">Δεν δόθηκε</td></tr><tr role="row" class="odd"><td class="hidden-xs sorting_1">331-3405</td><td>ΧΡΗΜΑΤΟΟΙΚΟΝΟΜΙΚΑ ΜΑΘΗΜΑΤΙΚΑ ΙΙ</td><td class="hidden-xs"><span class="hiddenDate">2017-03-15 00:00:00</span>15.03.2017</td><td><span class="hiddenDate">2017-06-15 00:00:00</span>15.06.2017</td><td>5</td><td class="hidden-xs">Επιτυχία</td></tr><tr role="row" class="even"><td class="hidden-xs sorting_1">331-3405</td><td>ΧΡΗΜΑΤΟΟΙΚΟΝΟΜΙΚΑ ΜΑΘΗΜΑΤΙΚΑ ΙΙ</td><td class="hidden-xs"><span class="hiddenDate">2017-03-15 00:00:00</span>15.03.2017</td><td><span class="hiddenDate"></span></td><td></td><td class="hidden-xs">Δεν δόθηκε</td></tr></tbody>
                      </table></div></div><div class="row"><div class="col-sm-5"><div class="dataTables_info" id="example1_info" role="status" aria-live="polite">Εμφάνιση 1 έως 60 από <b>60</b> εγγραφές</div></div><div class="col-sm-7"><div class="dataTables_paginate paging_simple_numbers" id="example1_paginate"><ul class="pagination"><li class="paginate_button previous disabled" id="example1_previous"><a href="#" aria-controls="example1" data-dt-idx="0" tabindex="0">Προηγούμενη</a></li><li class="paginate_button active"><a href="#" aria-controls="example1" data-dt-idx="1" tabindex="0">1</a></li><li class="paginate_button next disabled" id="example1_next"><a href="#" aria-controls="example1" data-dt-idx="2" tabindex="0">Επόμενη</a></li></ul></div></div></div></div>
                    </div><!-- /.box-body -->
                  </div><!-- /.box -->
                </div><!-- finish 1st /.tab-pane -->
                <div class="tab-pane" id="tab_2">
                  <b>Δηλώσεις ανα Εξάμηνο:</b>
                                    <div id="example_wrapper" class="dataTables_wrapper form-inline dt-bootstrap"><div class="row"><div class="col-sm-6"><div class="dataTables_length" id="example_length"><label>Δείξε <select name="example_length" aria-controls="example" class="form-control input-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> εγγραφές</label></div></div><div class="col-sm-6"></div></div><div class="row"><div class="col-sm-12"><table id="example" class="display dataTable" cellspacing="0" width="100%" role="grid" aria-describedby="example_info" style="width: 100%;">
                    <thead>
                      <tr role="row"><th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Κωδ. Μαθ.: activate to sort column ascending">Κωδ. Μαθ.</th><th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Τίτλος: activate to sort column ascending">Τίτλος</th><th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Εξάμηνο: activate to sort column ascending">Εξάμηνο</th><th class="hidden-xs sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Δ.Μ.: activate to sort column ascending">Δ.Μ.</th><th class="hidden-xs sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="ECTS: activate to sort column ascending">ECTS</th><th class="hidden-xs sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Τύπος: activate to sort column ascending">Τύπος</th><th class="hidden-xs sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Βαθμός: activate to sort column ascending">Βαθμός</th></tr>
                    </thead>
                    <tfoot>
                      <tr><th rowspan="1" colspan="1">Κωδ. Μαθ.</th><th rowspan="1" colspan="1">Τίτλος</th><th rowspan="1" colspan="1">Εξάμηνο</th><th class="hidden-xs" rowspan="1" colspan="1">Δ.Μ.</th><th class="hidden-xs" rowspan="1" colspan="1">ECTS</th><th class="hidden-xs" rowspan="1" colspan="1">Τύπος</th><th class="hidden-xs" rowspan="1" colspan="1">Βαθμός</th></tr>
                    </tfoot>
                    <tbody>
                                          <tr class="group"><td colspan="8">Εαρινό εξάμηνο 2016-2017</td></tr><tr role="row" class="odd"><td>311-0084</td><td>ΓΡΑΜΜΙΚΗ ΑΛΓΕΒΡΑ ΙΙ</td><td>02</td><td class="hidden-xs">5</td><td class="hidden-xs"></td><td class="hidden-xs">Υ</td><td class="hidden-xs"></td></tr><tr role="row" class="even"><td>311-0134</td><td>ΣΥΝΗΘΕΙΣ ΔΙΑΦΟΡΙΚΕΣ ΕΞΙΣΩΣΕΙΣ Ι</td><td>04</td><td class="hidden-xs">5</td><td class="hidden-xs"></td><td class="hidden-xs">Υ</td><td class="hidden-xs"></td></tr><tr role="row" class="odd"><td>311-0238</td><td>ΣΤΑΤΙΣΤΙΚΗ</td><td>06</td><td class="hidden-xs">4</td><td class="hidden-xs"></td><td class="hidden-xs">ΚΕΥ</td><td class="hidden-xs"></td></tr><tr role="row" class="even"><td>311-0257</td><td>ΜΙΓΑΔΙΚΗ ΑΝΑΛΥΣΗ</td><td>06</td><td class="hidden-xs">5</td><td class="hidden-xs"></td><td class="hidden-xs">Υ</td><td class="hidden-xs"></td></tr><tr role="row" class="odd"><td>311-0296</td><td>ΑΝΑΛΥΣΗ ΙΙ</td><td>06</td><td class="hidden-xs">5</td><td class="hidden-xs"></td><td class="hidden-xs">Υ</td><td class="hidden-xs"></td></tr><tr role="row" class="even"><td>311-0334</td><td>ΜΑΘΗΜΑΤΙΚΗ ΛΟΓΙΚΗ</td><td>04</td><td class="hidden-xs">4</td><td class="hidden-xs"></td><td class="hidden-xs">ΚΕΥ</td><td class="hidden-xs"></td></tr><tr role="row" class="odd"><td>311-0571</td><td>ΑΠΕΙΡΟΣΤΙΚΟΣ ΛΟΓΙΣΜΟΣ IV</td><td>04</td><td class="hidden-xs">5</td><td class="hidden-xs"></td><td class="hidden-xs">Υ</td><td class="hidden-xs">2</td></tr><tr role="row" class="even"><td>311-3101</td><td>ΠΡΟΧΩΡΗΜΕΝΕΣ ΓΛΩΣΣΕΣ ΠΡΟΓΡΑΜΜΑΤΙΣΜΟΥ</td><td>08</td><td class="hidden-xs">4</td><td class="hidden-xs"></td><td class="hidden-xs">ΚΕΥ</td><td class="hidden-xs"></td></tr><tr role="row" class="odd"><td>321-2551</td><td>ΘΕΩΡΙΑ  ΚΥΚΛΩΜΑΤΩΝ</td><td>_ΠΡΟΣΦΕΡΟΜΕΝΟ ΑΠΟ Μ.Π.Ε.Σ.2</td><td class="hidden-xs">4</td><td class="hidden-xs"></td><td class="hidden-xs">Π</td><td class="hidden-xs"></td></tr><tr role="row" class="even"><td>331-3405</td><td>ΧΡΗΜΑΤΟΟΙΚΟΝΟΜΙΚΑ ΜΑΘΗΜΑΤΙΚΑ ΙΙ</td><td>_ΠΡΟΣΦΕΡΟΜΕΝΟ ΑΠΟ Σ.Α.Χ.Μ.2</td><td class="hidden-xs">4</td><td class="hidden-xs"></td><td class="hidden-xs">Π</td><td class="hidden-xs"></td></tr><tr role="row" class="odd"><td>331-2406</td><td>ΣΤΟΧΑΣΤΙΚΕΣ ΔΙΑΔΙΚΑΣΙΕΣ</td><td>_ΠΡΟΣΦΕΡΟΜΕΝΟ ΑΠΟ Σ.Α.Χ.Μ.2</td><td class="hidden-xs">4</td><td class="hidden-xs"></td><td class="hidden-xs">Π</td><td class="hidden-xs">6</td></tr><tr role="row" class="even"><td>331-3405</td><td>ΧΡΗΜΑΤΟΟΙΚΟΝΟΜΙΚΑ ΜΑΘΗΜΑΤΙΚΑ ΙΙ</td><td>_ΠΡΟΣΦΕΡΟΜΕΝΟ ΑΠΟ Σ.Α.Χ.Μ.2</td><td class="hidden-xs">4</td><td class="hidden-xs"></td><td class="hidden-xs">Π</td><td class="hidden-xs">5</td></tr><tr class="group"><td colspan="8">Χειμερινό εξάμηνο 2016-2017</td></tr><tr role="row" class="odd"><td>311-0186</td><td>ΔΙΑΚΡΙΤΑ ΜΑΘΗΜΑΤΙΚΑ</td><td>03</td><td class="hidden-xs">4</td><td class="hidden-xs"></td><td class="hidden-xs">ΚΕΥ</td><td class="hidden-xs"></td></tr><tr role="row" class="even"><td>311-0551</td><td>ΑΠΕΙΡΟΣΤΙΚΟΣ ΛΟΓΙΣΜΟΣ ΙΙΙ</td><td>03</td><td class="hidden-xs">5</td><td class="hidden-xs"></td><td class="hidden-xs">Υ</td><td class="hidden-xs"></td></tr><tr role="row" class="odd"><td>311-0562</td><td>ΦΥΣΙΚΗ Ι</td><td>05</td><td class="hidden-xs">5</td><td class="hidden-xs"></td><td class="hidden-xs">Υ</td><td class="hidden-xs"></td></tr><tr role="row" class="even"><td>331-2105</td><td>ΕΙΣΑΓΩΓΗ ΣΤΑ ΧΡΗΜΑΤΟΟΙΚΟΝΟΜΙΚΑ ΜΑΘΗΜΑΤΙΚΑ</td><td>_ΠΡΟΣΦΕΡΟΜΕΝΟ ΑΠΟ Σ.Α.Χ.Μ.1</td><td class="hidden-xs">4</td><td class="hidden-xs"></td><td class="hidden-xs">Π</td><td class="hidden-xs"></td></tr><tr role="row" class="odd"><td>331-2806</td><td>ΜΙΚΡΟΟΙΚΟΝΟΜΙΚΗ ΘΕΩΡΙΑ</td><td>_ΠΡΟΣΦΕΡΟΜΕΝΟ ΑΠΟ Σ.Α.Χ.Μ.1</td><td class="hidden-xs">4</td><td class="hidden-xs"></td><td class="hidden-xs">ΚΕΥ</td><td class="hidden-xs"></td></tr><tr role="row" class="even"><td>311-0162</td><td>ΠΙΘΑΝΟΤΗΤΕΣ</td><td>05</td><td class="hidden-xs">5</td><td class="hidden-xs"></td><td class="hidden-xs">Υ</td><td class="hidden-xs">6</td></tr><tr role="row" class="odd"><td>311-0194</td><td>ΑΝΑΛΥΣΗ Ι</td><td>03</td><td class="hidden-xs">5</td><td class="hidden-xs"></td><td class="hidden-xs">Υ</td><td class="hidden-xs">1</td></tr><tr role="row" class="even"><td>311-0106</td><td>ΓΛΩΣΣΕΣ ΠΡΟΓΡΑΜΜΑΤΙΣΜΟΥ</td><td>03</td><td class="hidden-xs">4</td><td class="hidden-xs"></td><td class="hidden-xs">ΚΕΥ</td><td class="hidden-xs">7</td></tr><tr role="row" class="odd"><td>311-0037</td><td>ΓΡΑΜΜΙΚΗ ΑΛΓΕΒΡΑ Ι</td><td>01</td><td class="hidden-xs">5</td><td class="hidden-xs"></td><td class="hidden-xs">Υ</td><td class="hidden-xs">0.5</td></tr><tr role="row" class="even"><td>311-0024</td><td>ΑΛΓΕΒΡΑ</td><td>03</td><td class="hidden-xs">5</td><td class="hidden-xs"></td><td class="hidden-xs">Υ</td><td class="hidden-xs">3</td></tr><tr role="row" class="odd"><td>311-2353</td><td>ΝΕΕΣ ΤΕΧΝΟΛΟΓΙΕΣ ΣΤΗΝ ΕΚΠΑΙΔΕΥΣΗ</td><td>07</td><td class="hidden-xs">4</td><td class="hidden-xs"></td><td class="hidden-xs">ΚΕΥ</td><td class="hidden-xs">6</td></tr><tr class="group"><td colspan="8">Εαρινό εξάμηνο Ακαδ. Έτους 2015-2016</td></tr><tr role="row" class="even"><td>311-2850</td><td>ΙΣΤΟΡΙΑ ΕΥΚΛΕΙΔΕΙΩΝ ΚΑΙ ΜΗ ΕΥΚΛΕΙΔΕΙΩΝ ΓΕΩΜΕΤΡΙΩΝ</td><td>08</td><td class="hidden-xs">4</td><td class="hidden-xs"></td><td class="hidden-xs">ΚΕΥ</td><td class="hidden-xs">6</td></tr><tr role="row" class="odd"><td>311-0071</td><td>ΑΠΕΙΡΟΣΤΙΚΟΣ ΛΟΓΙΣΜΟΣ ΙΙ</td><td>02</td><td class="hidden-xs">5</td><td class="hidden-xs"></td><td class="hidden-xs">Υ</td><td class="hidden-xs">5</td></tr></tbody>
                  </table></div></div><div class="row"><div class="col-sm-5"><div class="dataTables_info" id="example_info" role="status" aria-live="polite">Εμφάνιση 1 έως 25 από <b>60</b> εγγραφές</div></div><div class="col-sm-7"><div class="dataTables_paginate paging_simple_numbers" id="example_paginate"><ul class="pagination"><li class="paginate_button previous disabled" id="example_previous"><a href="#" aria-controls="example" data-dt-idx="0" tabindex="0">Προηγούμενη</a></li><li class="paginate_button active"><a href="#" aria-controls="example" data-dt-idx="1" tabindex="0">1</a></li><li class="paginate_button "><a href="#" aria-controls="example" data-dt-idx="2" tabindex="0">2</a></li><li class="paginate_button "><a href="#" aria-controls="example" data-dt-idx="3" tabindex="0">3</a></li><li class="paginate_button next" id="example_next"><a href="#" aria-controls="example" data-dt-idx="4" tabindex="0">Επόμενη</a></li></ul></div></div></div></div>

                </div><!-- finish 2nd /.tab-pane -->
                <div class="tab-pane" id="tab_3">
                  <div class="box">
                    <div class="box-body table-responsive no-padding">
                      <div id="example3_wrapper" class="dataTables_wrapper form-inline dt-bootstrap no-footer"><div class="row"><div class="col-sm-6"></div><div class="col-sm-6"></div></div><div class="row"><div class="col-sm-12"><table id="example3" class="table table-bordered table-striped dataTable no-footer" style="font-size: 13px;" role="grid">
                        <thead>
                          <tr role="row"><th class="sorting_disabled" rowspan="1" colspan="1">Κωδικός</th><th class="sorting_disabled" rowspan="1" colspan="1">Τίτλος Μαθήματος</th><th class="sorting_disabled" rowspan="1" colspan="1">Είδος</th><th class="sorting_disabled" rowspan="1" colspan="1">ECTS</th><th class="sorting_disabled" rowspan="1" colspan="1">Informatics</th><th class="sorting_disabled" rowspan="1" colspan="1">Υπολ. Πτυχ.</th><th class="sorting_disabled" rowspan="1" colspan="1">Ημ/νία δήλωσης</th><th class="sorting_disabled" rowspan="1" colspan="1">Ημ/νια Εξέτ</th><th class="sorting_disabled" rowspan="1" colspan="1">Βαθμός</th><th class="sorting_disabled" rowspan="1" colspan="1">Χαρακτηρισμός</th></tr>
                        </thead>
                        <tbody>
                                                  <tr role="row" class="odd"><td>311-0011</td><td>ΑΠΕΙΡΟΣΤΙΚΟΣ ΛΟΓΙΣΜΟΣ Ι</td><td>Υ</td><td>10</td><td>Όχι</td><td>Ναι</td><td>30.10.2014</td><td>09.09.2015</td><td>5.5</td><td>Επιτυχία</td></tr><tr role="row" class="even"><td>311-0044</td><td>ΕΙΣΑΓΩΓΗ ΣΤΗΝ ΠΛΗΡΟΦΟΡΙΚΗ</td><td>Υ</td><td>10</td><td>Ναι</td><td>Ναι</td><td>15.03.2016</td><td>15.06.2016</td><td>5.5</td><td>Επιτυχία</td></tr><tr role="row" class="odd"><td>311-0071</td><td>ΑΠΕΙΡΟΣΤΙΚΟΣ ΛΟΓΙΣΜΟΣ ΙΙ</td><td>Υ</td><td>10</td><td>Όχι</td><td>Ναι</td><td>15.03.2016</td><td>21.06.2016</td><td>5</td><td>Επιτυχία</td></tr><tr role="row" class="even"><td>311-0106</td><td>ΓΛΩΣΣΕΣ ΠΡΟΓΡΑΜΜΑΤΙΣΜΟΥ</td><td>ΚΕΥ</td><td>6</td><td>Ναι</td><td>Ναι</td><td>30.10.2016</td><td>16.02.2017</td><td>7</td><td>Επιτυχία</td></tr><tr role="row" class="odd"><td>311-0162</td><td>ΠΙΘΑΝΟΤΗΤΕΣ</td><td>Υ</td><td>9</td><td>Όχι</td><td>Ναι</td><td>30.10.2016</td><td>08.02.2017</td><td>6</td><td>Επιτυχία</td></tr><tr role="row" class="even"><td>311-0542</td><td>ΣΥΝΟΛΑ ΚΑΙ ΑΡΙΘΜΟΙ</td><td>Υ</td><td>10</td><td>Όχι</td><td>Ναι</td><td>30.10.2015</td><td>08.02.2016</td><td>5</td><td>Επιτυχία</td></tr><tr role="row" class="odd"><td>311-1550</td><td>ΑΓΓΛΙΚΑ ΓΙΑ ΜΑΘΗΜΑΤΙΚΑ ΙΙ - ΙΙΙ</td><td>Υ</td><td>5</td><td>Όχι</td><td>Ναι</td><td>02.09.2014</td><td>03.09.2014</td><td>7</td><td>Επιτυχία</td></tr><tr role="row" class="even"><td>311-1650</td><td>ΑΓΓΛΙΚΑ ΓΙΑ ΜΑΘΗΜΑΤΙΚΑ ΙΙ</td><td></td><td></td><td>Όχι</td><td>Όχι</td><td>30.10.2013</td><td>03.02.2014</td><td>8.5</td><td>Επιτυχία</td></tr><tr role="row" class="odd"><td>311-1700</td><td>ΑΓΓΛΙΚΑ ΓΙΑ ΜΑΘΗΜΑΤΙΚΑ ΙΙΙ</td><td></td><td></td><td>Όχι</td><td>Όχι</td><td>15.03.2014</td><td>02.09.2014</td><td>5.5</td><td>Επιτυχία</td></tr><tr role="row" class="even"><td>311-2303</td><td>ΔΙΔΑΚΤΙΚΗ ΕΥΚΛΕΙΔΕΙΑΣ ΓΕΩΜΕΤΡΙΑΣ</td><td>ΚΕΥ</td><td>6</td><td>Όχι</td><td>Ναι</td><td>30.10.2015</td><td>08.09.2016</td><td>8</td><td>Επιτυχία</td></tr><tr role="row" class="odd"><td>311-2353</td><td>ΝΕΕΣ ΤΕΧΝΟΛΟΓΙΕΣ ΣΤΗΝ ΕΚΠΑΙΔΕΥΣΗ</td><td>ΚΕΥ</td><td>6</td><td>Ναι</td><td>Ναι</td><td>30.10.2016</td><td>09.02.2017</td><td>6</td><td>Επιτυχία</td></tr><tr role="row" class="even"><td>311-2850</td><td>ΙΣΤΟΡΙΑ ΕΥΚΛΕΙΔΕΙΩΝ ΚΑΙ ΜΗ ΕΥΚΛΕΙΔΕΙΩΝ ΓΕΩΜΕΤΡΙΩΝ</td><td>ΚΕΥ</td><td>6</td><td>Όχι</td><td>Ναι</td><td>15.03.2016</td><td>23.06.2016</td><td>6</td><td>Επιτυχία</td></tr><tr role="row" class="odd"><td>331-2406</td><td>ΣΤΟΧΑΣΤΙΚΕΣ ΔΙΑΔΙΚΑΣΙΕΣ</td><td>Π</td><td>9</td><td>Όχι</td><td>Ναι</td><td>15.03.2017</td><td>14.06.2017</td><td>6</td><td>Επιτυχία</td></tr><tr role="row" class="even"><td>331-3405</td><td>ΧΡΗΜΑΤΟΟΙΚΟΝΟΜΙΚΑ ΜΑΘΗΜΑΤΙΚΑ ΙΙ</td><td>Π</td><td>6</td><td>Όχι</td><td>Ναι</td><td>15.03.2017</td><td>15.06.2017</td><td>5</td><td>Επιτυχία</td></tr></tbody>
                      </table></div></div><div class="row"><div class="col-sm-5"></div><div class="col-sm-7"></div></div></div>
                    
                    <table border="0" width="45%" align="center">
                      <tbody><tr>
                        <td width="50%"><b>Επιτυχή μαθήματα:</b>(Υπολ.Πτυχ.:Ναι)</td>
                        <td>12 &nbsp;&nbsp;&nbsp;   (<b>Υ</b> = 6 <b>ΚΕΥ</b> = 4  <b>Π/Ε</b> = 2 )</td>
                      </tr>
                      <tr>
                        <td><b>Σύνολο διδ. μονάδων:</b></td>
                        <td>52</td>
                      </tr>
                      <tr>
                        <td><b>Σύνολο ECTS:</b></td>
                        <td>93</td>
                      </tr>
                    </tbody></table>
                  </div><!-- /.box-body -->
                </div><!-- /.box -->

              </div><!-- finish 3rd /.tab-pane -->
            </div><!-- /.tab-content -->
          </div><!-- nav-tabs-custom -->

<!-- AMKA hidden form -->

        </section><!-- /.content -->
      </div><!-- /.container -->
    </div><!-- /.content-wrapper -->
    <footer class="main-footer">
      <div class="container">
        <div class="pull-right hidden-md">
          <span style="font-size: 12px !important;">Ηγεμονείο, Καρλόβασι 832 00, Τηλ.: 22730 82100, FAX: 22730 82007, email: <a href="mailto:math_akad_gram@math.aegean.gr">math_akad_gram@math.aegean.gr</a> &nbsp;::&nbsp; Υπεύθυνος Ιστοσελίδας: Παπαλουκάς Νίκος.</span>
        </div>
        <strong>Copyright © 2015-16, Τμ. Μαθηματικών.</strong>
      </div><!-- /.container -->
    </footer>
  </div><!-- ./wrapper -->

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
        "autoWidth": false
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
                '<tr class="group"><td colspan="8">'+group+'</td></tr>'
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


</body>`;

export default html;
