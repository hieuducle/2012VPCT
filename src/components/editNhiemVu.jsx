import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  editNhiemvusAPI,
  getTypeProgramsAPI,
  getNhiemvusbyIdAPI,
} from "../../src/api/todos";
import "../css/table.css";

function EditNhiemVu({ nhiemvuId }) {
  // const [loaiChuongTrinhOptions, setLoaiChuongTrinhOptions] = useState([]);
  // const [selectedLoaiChuongTrinh, setSelectedLoaiChuongTrinh] = useState("");
  const [nhiemvu, setProgram] = useState({});

  useEffect(() => {
    async function fetchData() {
      const options = await getTypeProgramsAPI();
      // setLoaiChuongTrinhOptions(options);

      const nhiemvuData = await getNhiemvusbyIdAPI(nhiemvuId);
      setProgram(nhiemvuData);
      // setSelectedLoaiChuongTrinh(programData.loaiChuongTrinhId);
    }
    fetchData();
  }, [nhiemvuId]);

  // const handleLoaiChuongTrinhChange = (event) => {
  //   setSelectedLoaiChuongTrinh(event.target.value);
  // };

  const saveChanges = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const maNhiemVu = event.target.maNhiemVu.value;

    await editNhiemvusAPI(nhiemvuId, {
      id: nhiemvuId,
      name: name,
      maNhiemVu: maNhiemVu,
      // loaiChuongTrinhId: selectedLoaiChuongTrinh,
    });
  };

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-2">
              <h5>Sửa chương trình</h5>
            </div>
          </div>
        </div>
      </section>

      <div>
        <form onSubmit={saveChanges}>
          <div className="row">
            <div className="col-sm-4 mt-4">
              <label className="font-weight-normal" htmlFor="name">
                <b>Tên CT</b>
                <p className="text-danger d-inline">(*)</p>
              </label>
            </div>
            <div className="col-sm-8 mt-4">
              <input
                value ={nhiemvu.name}
                className="form-control rounded"
                type="text"
                name="name"
                id="name"
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
              />
              <br />
            </div>

            <div className="col-sm-4 mt-2">
              <div className="input-group">
                <label
                  className="font-weight-normal mb-4"
                  htmlFor="maChuongTrinh"
                >
                  <b>Mã số CT</b>
                  <p className="text-danger d-inline">(*)</p>
                </label>
              </div>
            </div>
            <div className="col-sm-8 mt-2">
              <input
                value={nhiemvu.maNhiemVu}
                className="form-control rounded"
                type="text"
                name="maChuongTrinh"
                id="maChuongTrinh"
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
              />
              <br />
            </div>

            <div className="col-sm-4 mt-1">
              <div className="input-group">
                <label
                  className="font-weight-normal mb-4"
                  htmlFor="loaiChuongTrinhId"
                >
                  <b>Loại CT</b>
                  <p className="text-danger d-inline">(*)</p>
                </label>
              </div>
            </div>
            {/* <div className="col-sm-8 mt-1">
              <select
                value={selectedLoaiChuongTrinh}
                onChange={handleLoaiChuongTrinhChange}
                className="custom-select option-select"
              >
                {loaiChuongTrinhOptions?.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
              <br />
            </div> */}

            <div className="col-sm-5">
              <button type="submit" className="btn btn-info btn-sm mr-2">
                <i className="fas fa-save"></i> Lưu
              </button>
              <a href="/home" className="btn btn-danger btn-sm mr-2">
                <i className="fas fa-window-close"></i> Hủy
              </a>
            </div>
          </div>
        </form>
      </div>

      <ol className="breadcrumb float-sm-right">
        <li className="breadcrumb-item">
          <a href="/home">Chương trình</a>
        </li>
        <li className="breadcrumb-item active">Dữ liệu</li>
      </ol>
    </div>
  );
}

export default EditNhiemVu;