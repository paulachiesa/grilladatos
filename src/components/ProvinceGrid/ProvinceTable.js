import React, { useEffect, useState } from 'react'
import "./ProvinceTable.css"
import EditModal from '../ActionsModal/EditModal'
import DeleteModal from '../ActionsModal/DeleteModal'

const ProvinceTable = () => {

  const [province, setProvince] = useState([])
  const [id, setId] = useState()
  const [nombre, setNombre] = useState()
  const [displayDeleteModal, setDisplayDeleteModal] = useState(false)
  const [displayEditModal, setDisplayEditModal] = useState(false)

  const getData = () => {
    fetch('https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre')
      .then(res => res.json())
      .then(function (myJson) {
        // console.log(myJson);
        setProvince(myJson.provincias);
      })
  }

  useEffect(() => {
    getData()
  }, [])

  // delete modal actions
  const showDeleteModal = (id) => {
    setId(id)
    setDisplayDeleteModal(true)
  }

  const hideDeleteModal = () => {
    setDisplayDeleteModal(false)
  }

  const submitDelete = (id) => {
    setProvince(province.filter((prov) => prov.id !== id))
    setDisplayDeleteModal(false)
  }

  // edit modal actions 
  const showEditModal = (id, nombre) => {
    setId(id)
    setNombre(nombre)
    setDisplayEditModal(true)
  }

  const hideEditModal = () => {
    setDisplayEditModal(false)
  }


  const submitEdit = (id, newName) => {
    const updProv = province.map(prov => {
      if (prov.id === id) {
        return { ...prov, nombre: newName }
      }
      return prov;
    })
    setProvince(updProv)
    setDisplayEditModal(false)
  }

  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th className='thHeader' scope="col">#</th>
            <th className='thHeader' scope="col">Province Name</th>
            <th className='thHeader' scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {province.map((prov) => (
            <tr
              key={prov.id}
            >
              <th >{prov.id}</th>
              <th >{prov.nombre}</th>
              <th >
                <button
                  type="button"
                  className="btn btn-sm btn-primary actionButtons"
                  onClick={() => showEditModal(prov.id, prov.nombre)}
                ><i className="fa-solid fa-pen"></i></button>
                <EditModal />
                <button
                  type="button"
                  className="btn btn-sm btn-danger actionButtons"
                  onClick={() => showDeleteModal(prov.id)}
                ><i className="fa-solid fa-trash"></i></button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
      <DeleteModal
        showModal={displayDeleteModal}
        confirmModal={submitDelete}
        hideModal={hideDeleteModal}
        id={id} />
      <EditModal
        showModal={displayEditModal}
        confirmModal={submitEdit}
        hideModal={hideEditModal}
        id={id}
        name={nombre} />
    </div>
  )
}

export default ProvinceTable