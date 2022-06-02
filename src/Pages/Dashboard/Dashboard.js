import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">
                <Outlet />
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
            <div class="drawer-side shadow-lg">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-60 text-info text-sm uppercase font-medium">
                    <li><Link to='/dashboard'>Summary</Link></li>
                    <li><Link to='/dashboard/my-posts'>My Posts</Link></li>
                    <li><Link to='/dashboard/add-post'>Add Post</Link></li>
                    <li><Link to='/dashboard/posts'>Posts</Link></li>
                    <li><Link to='/dashboard/tags'>Tag</Link></li>
                    <li><Link to='/dashboard/add-tag'>Add Tag</Link></li>
                    <li><Link to='/dashboard/users'>Users</Link></li>
                    <li><Link to='/dashboard/admins'>Admins</Link></li>
                    <li><Link to='/dashboard/create-admin'>Create Admin</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;