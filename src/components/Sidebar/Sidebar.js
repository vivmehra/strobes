import React from "react";
import footerLogo from "../../assets/footerLogo.png";

const sidebar = () => {
  return (
    <aside className="bx--col-lg-3">
      <div className="sidebar__banner">
        <header>
          <h3 className="sidebar__subheading">Risk-Centered</h3>
          <p className="sidebar__p">Vulnerabilty Management</p>
        </header>
        <footer className="sidebar__footer">
          <img src={footerLogo} alt="strobes footer" />
          <h3 className="sidebar__footer_subheading">Security Workflows</h3>
          <p className="sidebar__footer_p">
            Create and run playbooks to integrate security into your CI/CD
            pipeline.
          </p>
        </footer>
      </div>
    </aside>
  );
};
export default sidebar;
