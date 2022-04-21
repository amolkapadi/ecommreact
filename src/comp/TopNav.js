import React from 'react'

export default function TopNav() {
    return (
        <>
            <ul class="nav py-1 container">
                <li class="nav-item">
                    <a class="nav-link "  href="#">
                    <i class="bi bi-facebook"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><i class="bi bi-instagram"></i></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                    <i class="bi bi-whatsapp"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link "><i class="bi bi-facebook"></i></a>
                </li>
                <li class="d-flex ms-auto fw-bold">
                    <p>Contact No :-<i> 8888888888</i></p>
                 </li>
            </ul>
        </>
    )
}
