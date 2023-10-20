import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';

export default function Header() {
  return (
    <>
      <header className='header-top-strip py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <p className='text-white mb-0'>Entrega grátis para pedidos acima de R$ 199</p>
            </div>
            <div className='col-6'>
              <p className='text-end text-white'>
                Contato: <a  href='tel:+99 99999897789'>+55 909 99 999</a>
              </p>
            </div>
          </div>
        </div>
      </header>

      <header className='header-upper py-3'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-2'>
              <h2>
                <Link className='text-white'>Developers</Link>
              </h2>
            </div>
            <div className='col-5'>
              <div class="input-group">
                <input type="text" class="form-control py-2" placeholder="Buscar Produtos" aria-label="Buscar Produtos" aria-describedby="basic-addon2" />
                <span class="input-group-text p-3" id="basic-addon2">
                  <BsSearch className='fs-6'/>
                </span>
              </div>
            </div>
            <div className='col-5'>
              <div className='header-upper-links d-flex align-items-center justify-content-between'>
                <div>
                  <Link className='d-flex align-items-center gap-10 text-white'>
                    <img src='images/compare.svg' alt='compare'/>
                    <p className='mb-0'>Comparar <br /> Produtos</p>
                  </Link>
                </div>
                <div>
                  <Link className='d-flex align-items-center gap-10 text-white'>
                    <img src='images/wishlist.svg' alt='wishlist'/>
                    <p className='mb-0'>Favoritos</p>
                  </Link>
                </div>
                <div>
                  <Link className='d-flex align-items-center gap-10 text-white'>
                    <img src='images/user.svg' alt='user'/>
                    <p className='mb-0'>Login <br /> Minha Conta</p>
                  </Link>
                </div>
                <div>
                  <Link className='d-flex align-items-center gap-10 text-white'>
                    <img src='images/cart.svg' alt='cart'/>
                      <div className='d-flex flex-column gap-10'>
                        <span className='badge bg-white text-dark'>0</span>
                        <p className='mb-0'>R$ 500</p>
                      </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className='header-bottom py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='menu-bottom d-flex align-items-center'>
                <div></div>
                <div className='menu-links'>
                  <div className='d-flex align-items-center gap-15'>
                    <NavLink className='text-white' to='/'>Home</NavLink>
                    <NavLink className='text-white' to='/'>Nossa Loja</NavLink>
                    <NavLink className='text-white' to='/'>Blog</NavLink>
                    <NavLink className='text-white' to='/'>Contato</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}