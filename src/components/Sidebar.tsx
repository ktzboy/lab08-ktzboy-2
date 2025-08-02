import type { SidebarProps } from "../libs/types"
export default function Sidebar({ userName,type }:SidebarProps) {
  return (
<aside
          className="d-flex flex-column p-3"
          style={{
            width: "200px",
            backgroundColor: "#f2f2f2",
            justifyContent: "space-between",
          }}>
                      {/* เมนูด้านบน */}
          <nav className="nav flex-column gap-2">
            <h5>Menu</h5>
            <a className="nav-link active" href="#">
              Home
            </a>
            <a className="nav-link" href="#">
              Note
            </a>
            <a className="nav-link" href="#">
              About
            </a>
          </nav>
        {/* แสดงชื่อผู้ใช้ด้านล่าง */}
          <div className="fw-bold text-muted">
            <p>{userName} : {type}</p>
          </div>
        </aside>
  )};