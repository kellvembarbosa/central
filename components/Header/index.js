import Head from 'next/head'

const Header = ({ title }) => (
    <div className="main-header" data-background-color="blue">
        <div className="nav-top">
            <div className="container d-flex flex-row">
                <button className="navbar-toggler sidenav-toggler ml-auto" type="button" data-toggle="collapse" data-target="collapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                        <i className="icon-menu"></i>
                    </span>
                </button>
                <button className="topbar-toggler more"><i className="icon-options-vertical"></i></button>

                <a href="index.html" className="logo d-flex align-items-center">
                    <img src="https://via.placeholder.com/100x35" alt="navbar brand" className="navbar-brand" />
                </a>

                <nav className="navbar navbar-header navbar-expand-lg p-0">

                    <div className="container-fluid p-0">
                        <div className="collapse" id="search-nav">
                            <form className="navbar-left navbar-form nav-search ml-md-3">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <button type="submit" className="btn btn-search pr-1">
                                            <i className="fa fa-search search-icon"></i>
                                        </button>
                                    </div>
                                    <input type="text" placeholder="Search ..." className="form-control" />
                                </div>
                            </form>
                        </div>
                        <ul className="navbar-nav topbar-nav ml-md-auto align-items-center">
                            <li className="nav-item toggle-nav-search hidden-caret">
                                <a className="nav-link" data-toggle="collapse" href="#search-nav" role="button" aria-expanded="false" aria-controls="search-nav">
                                    <i className="fa fa-search"></i>
                                </a>
                            </li>
                            <li className="nav-item dropdown hidden-caret">
                                <a className="nav-link dropdown-toggle" href="#" id="messageDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fa fa-envelope"></i>
                                </a>
                                <ul className="dropdown-menu messages-notif-box animated fadeIn" aria-labelledby="messageDropdown">
                                    <li>
                                        <div className="dropdown-title d-flex justify-content-between align-items-center">
                                            Messages
												<a href="#" className="small">Mark all as read</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="message-notif-scroll scrollbar-outer">
                                            <div className="notif-center">
                                                <a href="#">
                                                    <div className="notif-img">
                                                        <img src="https://via.placeholder.com/50" alt="Img Profile" />
                                                    </div>
                                                    <div className="notif-content">
                                                        <span className="subject">Jimmy Denis</span>
                                                        <span className="block">
                                                            How are you ?
															</span>
                                                        <span className="time">5 minutes ago</span>
                                                    </div>
                                                </a>
                                                <a href="#">
                                                    <div className="notif-img">
                                                        <img src="https://via.placeholder.com/50" alt="Img Profile" />
                                                    </div>
                                                    <div className="notif-content">
                                                        <span className="subject">Chad</span>
                                                        <span className="block">
                                                            Ok, Thanks !
															</span>
                                                        <span className="time">12 minutes ago</span>
                                                    </div>
                                                </a>
                                                <a href="#">
                                                    <div className="notif-img">
                                                        <img src="https://via.placeholder.com/50" alt="Img Profile" />
                                                    </div>
                                                    <div className="notif-content">
                                                        <span className="subject">Jhon Doe</span>
                                                        <span className="block">
                                                            Ready for the meeting today...
															</span>
                                                        <span className="time">12 minutes ago</span>
                                                    </div>
                                                </a>
                                                <a href="#">
                                                    <div className="notif-img">
                                                        <img src="https://via.placeholder.com/50" alt="Img Profile" />
                                                    </div>
                                                    <div className="notif-content">
                                                        <span className="subject">Talha</span>
                                                        <span className="block">
                                                            Hi, Apa Kabar ?
															</span>
                                                        <span className="time">17 minutes ago</span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <a className="see-all" href="javascript:void(0);">See all messages<i className="fa fa-angle-right"></i> </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown hidden-caret">
                                <a className="nav-link dropdown-toggle" href="#" id="notifDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fa fa-bell"></i>
                                    <span className="notification">4</span>
                                </a>
                                <ul className="dropdown-menu notif-box animated fadeIn" aria-labelledby="notifDropdown">
                                    <li>
                                        <div className="dropdown-title">You have 4 new notification</div>
                                    </li>
                                    <li>
                                        <div className="notif-scroll scrollbar-outer">
                                            <div className="notif-center">
                                                <a href="#">
                                                    <div className="notif-icon notif-primary"> <i className="fa fa-user-plus"></i> </div>
                                                    <div className="notif-content">
                                                        <span className="block">
                                                            New user registered
															</span>
                                                        <span className="time">5 minutes ago</span>
                                                    </div>
                                                </a>
                                                <a href="#">
                                                    <div className="notif-icon notif-success"> <i className="fa fa-comment"></i> </div>
                                                    <div className="notif-content">
                                                        <span className="block">
                                                            Rahmad commented on Admin
															</span>
                                                        <span className="time">12 minutes ago</span>
                                                    </div>
                                                </a>
                                                <a href="#">
                                                    <div className="notif-img">
                                                        <img src="https://via.placeholder.com/50" alt="Img Profile" />
                                                    </div>
                                                    <div className="notif-content">
                                                        <span className="block">
                                                            Reza send messages to you
															</span>
                                                        <span className="time">12 minutes ago</span>
                                                    </div>
                                                </a>
                                                <a href="#">
                                                    <div className="notif-icon notif-danger"> <i className="fa fa-heart"></i> </div>
                                                    <div className="notif-content">
                                                        <span className="block">
                                                            Farrah liked Admin
															</span>
                                                        <span className="time">17 minutes ago</span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <a className="see-all" href="javascript:void(0);">See all notifications<i className="fa fa-angle-right"></i> </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown hidden-caret">
                                <a className="nav-link" data-toggle="dropdown" href="#" aria-expanded="false">
                                    <i className="fas fa-layer-group"></i>
                                </a>
                                <div className="dropdown-menu quick-actions quick-actions-info animated fadeIn">
                                    <div className="quick-actions-header">
                                        <span className="title mb-1">Quick Actions</span>
                                        <span className="subtitle op-8">Shortcuts</span>
                                    </div>
                                    <div className="quick-actions-scroll scrollbar-outer">
                                        <div className="quick-actions-items">
                                            <div className="row m-0">
                                                <a className="col-6 col-md-4 p-0" href="#">
                                                    <div className="quick-actions-item">
                                                        <div className="avatar-item bg-danger rounded-circle">
                                                            <i className="far fa-calendar-alt"></i>
                                                        </div>
                                                        <span className="text">Calendar</span>
                                                    </div>
                                                </a>
                                                <a className="col-6 col-md-4 p-0" href="#">
                                                    <div className="quick-actions-item">
                                                        <div className="avatar-item bg-warning rounded-circle">
                                                            <i className="fas fa-map"></i>
                                                        </div>
                                                        <span className="text">Maps</span>
                                                    </div>
                                                </a>
                                                <a className="col-6 col-md-4 p-0" href="#">
                                                    <div className="quick-actions-item">
                                                        <div className="avatar-item bg-info rounded-circle">
                                                            <i className="fas fa-file-excel"></i>
                                                        </div>
                                                        <span className="text">Reports</span>
                                                    </div>
                                                </a>
                                                <a className="col-6 col-md-4 p-0" href="#">
                                                    <div className="quick-actions-item">
                                                        <div className="avatar-item bg-success rounded-circle">
                                                            <i className="fas fa-envelope"></i>
                                                        </div>
                                                        <span className="text">Emails</span>
                                                    </div>
                                                </a>
                                                <a className="col-6 col-md-4 p-0" href="#">
                                                    <div className="quick-actions-item">
                                                        <div className="avatar-item bg-primary rounded-circle">
                                                            <i className="fas fa-file-invoice-dollar"></i>
                                                        </div>
                                                        <span className="text">Invoice</span>
                                                    </div>
                                                </a>
                                                <a className="col-6 col-md-4 p-0" href="#">
                                                    <div className="quick-actions-item">
                                                        <div className="avatar-item bg-secondary rounded-circle">
                                                            <i className="fas fa-credit-card"></i>
                                                        </div>
                                                        <span className="text">Payments</span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link quick-sidebar-toggler">
                                    <i className="fa fa-th"></i>
                                </a>
                            </li>
                            <li className="nav-item dropdown hidden-caret">
                                <a className="dropdown-toggle profile-pic" data-toggle="dropdown" href="#" aria-expanded="false">
                                    <div className="avatar-sm">
                                        <img src="https://via.placeholder.com/50" alt="..." className="avatar-img rounded-circle" />
                                    </div>
                                </a>
                                <ul className="dropdown-menu dropdown-user animated fadeIn">
                                    <div className="dropdown-user-scroll scrollbar-outer">
                                        <li>
                                            <div className="user-box">
                                                <div className="avatar-lg"><img src="https://via.placeholder.com/50" alt="image profile" className="avatar-img rounded" /></div>
                                                <div className="u-text">
                                                    <h4>Hizrian</h4>
                                                    <p className="text-muted">hello@example.com</p><a href="profile.html" className="btn btn-xs btn-secondary btn-sm">View Profile</a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">My Profile</a>
                                            <a className="dropdown-item" href="#">My Balance</a>
                                            <a className="dropdown-item" href="#">Inbox</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Account Setting</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Logout</a>
                                        </li>
                                    </div>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
        <div className="nav-bottom bg-white">
            <h3 className="title-menu d-flex d-lg-none">
                Menu <div className="close-menu"> <i className="flaticon-cross"></i></div>
            </h3>
            <div className="container d-flex flex-row">
                <ul className="nav page-navigation page-navigation-secondary">
                    <li className="nav-item submenu active">
                        <a className="nav-link" href="#">
                            <i className="link-icon icon-screen-desktop"></i>
                            <span className="menu-title">Dashboard</span>
                        </a>
                        <div className="navbar-dropdown animated fadeIn">
                            <ul>
                                <li>
                                    <a href="../demo1/index.html">Dashboard 1</a>
                                </li>
                                <li>
                                    <a href="../demo2/index.html">Dashboard 2</a>
                                </li>
                                <li>
                                    <a href="../demo3/index.html">Dashboard 3</a>
                                </li>
                                <li>
                                    <a href="../demo4/index.html">Dashboard 4</a>
                                </li>
                                <li>
                                    <a href="../demo5/index.html">Dashboard 5</a>
                                </li>
                                <li>
                                    <a href="../demo6/index.html">Dashboard 6</a>
                                </li>
                                <li>
                                    <a href="../demo7/index.html">Dashboard 7</a>
                                </li>
                                <li>
                                    <a href="../demo8/index.html">Dashboard 8</a>
                                </li>
                                <li>
                                    <a href="../demo9/index.html">Dashboard 9</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item submenu">
                        <a className="nav-link" href="#">
                            <i className="link-icon icon-grid"></i>
                            <span className="menu-title">Apps</span>
                        </a>
                        <div className="navbar-dropdown animated fadeIn">
                            <ul>
                                <li>
                                    <a href="boards.html">Boards</a>
                                </li>
                                <li>
                                    <a href="projects.html">Projects</a>
                                </li>
                                <li>
                                    <a href="email-inbox.html">Email Inbox</a>
                                </li>
                                <li>
                                    <a href="email-detail.html">Email Detail</a>
                                </li>
                                <li>
                                    <a href="email-compose.html">Email Inbox</a>
                                </li>
                                <li>
                                    <a href="messages.html">Messages</a>
                                </li>
                                <li>
                                    <a href="conversations.html">Conversations</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item submenu">
                        <a className="nav-link" href="#">
                            <i className="link-icon icon-disc"></i>
                            <span className="menu-title">Finance</span>
                        </a>
                        <div className="navbar-dropdown animated fadeIn">
                            <ul>
                                <li>
                                    <a href="starter-template.html">Annual Report</a>
                                </li>
                                <li>
                                    <a href="starter-template.html">HR Report</a>
                                </li>
                                <li>
                                    <a href="starter-template.html">Finance Report</a>
                                </li>
                                <li>
                                    <a href="starter-template.html">Revenue Report</a>
                                </li>
                                <li>
                                    <a href="starter-template.html">IPO Report</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item submenu mega-menu dropdown">
                        <a className="nav-link" href="#">
                            <i className="link-icon icon-film"></i>
                            <span className="menu-title">Project</span>
                        </a>
                        <div className="navbar-dropdown animated fadeIn">
                            <div className="col-group-wrapper row">
                                <div className="col-group col-md-4">
                                    <div className="row">
                                        <div className="col-12">
                                            <p className="category-heading">Basic Elements</p>
                                            <div className="submenu-item">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <ul>
                                                            <li><a href="#">Accordion</a></li>
                                                            <li><a href="#">Buttons</a></li>
                                                            <li><a href="#">Badges</a></li>
                                                            <li><a href="#">Breadcrumbs</a></li>
                                                            <li><a href="#">Dropdown</a></li>
                                                            <li><a href="#">Modals</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <ul>
                                                            <li><a href="#">Progress bar</a></li>
                                                            <li><a href="#">Pagination</a></li>
                                                            <li><a href="#">Tabs</a></li>
                                                            <li><a href="#">Typography</a></li>
                                                            <li><a href="#">Tooltip</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-group col-md-4">
                                    <div className="row">
                                        <div className="col-12">
                                            <p className="category-heading">Advanced Elements</p>
                                            <div className="submenu-item">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <ul>
                                                            <li><a href="#">Datatables</a></li>
                                                            <li><a href="#">Carousel</a></li>
                                                            <li><a href="#">Clipboard</a></li>
                                                            <li><a href="#">Chart.js</a></li>
                                                            <li><a href="#">Loader</a></li>
                                                            <li><a href="#">Slider</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <ul>
                                                            <li><a href="#">Popup</a></li>
                                                            <li><a href="#">Notification</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-group col-md-4">
                                    <p className="category-heading">Icons</p>
                                    <ul className="submenu-item">
                                        <li><a href="#">Flaticons</a></li>
                                        <li><a href="#">Font Awesome</a></li>
                                        <li><a className="3">Simple Line Icons</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item submenu">
                        <a className="nav-link" href="#">
                            <i className="link-icon icon-book-open"></i>
                            <span className="menu-title">HR</span>
                        </a>
                        <div className="navbar-dropdown animated fadeIn">
                            <ul>
                                <li>
                                    <a href="starter-template.html">Annual Report</a>
                                </li>
                                <li>
                                    <a href="starter-template.html">HR Report</a>
                                </li>
                                <li>
                                    <a href="starter-template.html">Finance Report</a>
                                </li>
                                <li>
                                    <a href="starter-template.html">Revenue Report</a>
                                </li>
                                <li>
                                    <a href="starter-template.html">IPO Report</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item submenu">
                        <a className="nav-link" href="#">
                            <i className="link-icon icon-pie-chart"></i>
                            <span className="menu-title">Revenue</span>
                        </a>
                        <div className="navbar-dropdown animated fadeIn">
                            <ul>
                                <li>
                                    <a href="starter-template.html">Annual Report</a>
                                </li>
                                <li>
                                    <a href="starter-template.html">HR Report</a>
                                </li>
                                <li>
                                    <a href="starter-template.html">Finance Report</a>
                                </li>
                                <li>
                                    <a href="starter-template.html">Revenue Report</a>
                                </li>
                                <li>
                                    <a href="starter-template.html">IPO Report</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
)

export default Header