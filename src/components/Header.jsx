import React, { Component } from 'react'
import axios from 'axios';
export default class Header extends Component {
    handleLogout = async () => {
        try {
            // Gửi yêu cầu đến API để đăng xuất
            await axios.post('https://localhost:7220/api/Auth/logout');
            
            // Xóa token hoặc dữ liệu đăng nhập khỏi localStorage (hoặc sessionStorage)
            localStorage.removeItem('token'); // Nếu bạn lưu token trong localStorage
            
            // Chuyển hướng đến trang đăng nhập
            window.location.href = "/login";
        } catch (error) {
            console.error("Error logging out:", error);
        }
    }
    render() {
        
        return (
            <div>
                {/* Navbar */}
                <nav className="main-header navbar navbar-expand navbar-light">
                {/* Left navbar links */}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                        <a href="/home" className="nav-link font-weight-bold">Chương trình</a>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                        <a href="/duty" className="nav-link font-weight-bold">Nhiệm vụ KH&CN</a>
                        </li>
                    </ul>
                    {/* Right navbar links */}
                    <ul className="navbar-nav ml-auto">
                        {/* Navbar Search */}
                        <li className="nav-item">
                            <a className="nav-link" data-widget="navbar-search" href="#" role="button">
                                <i className="fas fa-search" />
                            </a>
                            <div className="navbar-search-block">
                                <form className="form-inline">
                                    <div className="input-group input-group-sm">
                                        <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                                        <div className="input-group-append">
                                        <button className="btn btn-navbar" type="submit">
                                            <i className="fas fa-search" />
                                        </button>
                                        <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                                            <i className="fas fa-times" />
                                        </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </li>
                        {/* Notifications Dropdown Menu */}
                        <li className="nav-item dropdown">
                            <a className="nav-link" data-toggle="dropdown" href="#">
                                <i className="far fa-bell" />
                                <span className="badge badge-warning navbar-badge">15</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                <span className="dropdown-item dropdown-header">15 Notifications</span>
                                <div className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                <i className="fas fa-envelope mr-2" /> 4 new messages
                                <span className="float-right text-muted text-sm">3 mins</span>
                                </a>
                                <div className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                <i className="fas fa-users mr-2" /> 8 friend requests
                                <span className="float-right text-muted text-sm">12 hours</span>
                                </a>
                                <div className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                <i className="fas fa-file mr-2" /> 3 new reports
                                <span className="float-right text-muted text-sm">2 days</span>
                                </a>
                                <div className="dropdown-divider" />
                                <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
                            </div>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" data-widget="fullscreen" href="#" role="button">
                            <i className="fas fa-expand-arrows-alt" />
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" data-widget="control-sidebar" data-controlsidebar-slide="true" href="#" role="button">
                            <i className="fas fa-th-large" />
                        </a>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                        <a href="/profile" className="nav-link"><i class="fas fa-user-cog"></i> sysadmin </a>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                        {/* <a href="/login" className="nav-link" ><i class="fas fa-sign-out-alt"></i> Đăng xuất </a> */}
                        <button onClick={this.handleLogout} className="nav-link btn btn-link">
                                <i className="fas fa-sign-out-alt"></i> Đăng xuất
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}
