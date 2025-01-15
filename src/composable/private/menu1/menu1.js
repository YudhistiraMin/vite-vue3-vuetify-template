import { ref } from "vue";

export function menu1() {
  const page = ref({ title: "Menu 1" });
  const breadcrumbs = ref([{ title: "Menu 1", disabled: false, href: "#" }]);
  const dialog = ref({
    import: false,
    konfirmasi: false,
  });
  const process = ref({ run: false });
  const headers = ref([
    { title: "Jenis Kelamin", value: "jenisKelamin" },
    { title: "Usia", value: "usia" },
    { title: "Pendidikan Terakhir", value: "pendidikan" },
    { title: "Pekerjaan", value: "pekerjaan" },
    { title: "Pembiayaan", value: "pembiayaan" },
    { title: "Tanda-tanda Vital", value: "tandaVital" },
    { title: "Riwayat Hipertensi", value: "riwayatHipertensi" },
    { title: "Riwayat DM", value: "riwayatDM" },
    { title: "Riwayat Hiperlipidemia", value: "riwayatHiperlipidemia" },
    { title: "Riwayat Stroke", value: "riwayatStroke" },
    { title: "Riwayat Gagal Jantung", value: "riwayatGagalJantung" },
    { title: "Riwayat Penyakit Kronis Lain", value: "riwayatPenyakitKronis" },
    { title: "Riwayat Penggunaan Obat", value: "riwayatObat" },
    { title: "Alamat", value: "alamat" },
    { title: "Lama Rawat Inap", value: "lamaRawat" },
    { title: "Keadaan Keluar RS", value: "keadaanKeluar" },
    { title: "Durasi Penyakit", value: "durasiPenyakit" },
    { title: "Obat Lain yang Dikonsumsi", value: "obatLain" },
    { title: "Durasi Penggunaan Obat > 3 Bulan", value: "durasiObat" },
	  { title: "Nomor Rekam Medis", value: "noMedis" },
    { title: "Nomor Registrasi", value: "noRegistrasi" },
  ]);

  const rows = ref([
    {
      jenisKelamin: "Laki-laki",
      usia: 45,
      pendidikan: "S1",
      pekerjaan: "Pegawai Negeri",
      pembiayaan: "BPJS",
      tandaVital: "Tekanan darah 120/80, Nadi 80 bpm",
      riwayatHipertensi: "Ya",
      riwayatDM: "Tidak",
      riwayatHiperlipidemia: "Tidak",
      riwayatStroke: "Tidak",
      riwayatGagalJantung: "Tidak",
      riwayatPenyakitKronis: "Asma",
      riwayatObat: "Obat Asma",
      alamat: "Kecamatan A, Kabupaten B, Provinsi C",
      lamaRawat: "5 hari",
      keadaanKeluar: "Sembuh",
      durasiPenyakit: "2 bulan",
      obatLain: "Vitamin C",
      durasiObat: "Tidak",
	  noMedis: '123456789',
	  noRegistrasi: '987654321',
    },
	{
        jenisKelamin: 'Perempuan',
        usia: 60,
        pendidikan: 'SMA',
        pekerjaan: 'Ibu Rumah Tangga',
        pembiayaan: 'Pribadi',
        tandaVital: 'Tekanan darah 140/90, Nadi 85 bpm',
        riwayatHipertensi: 'Ya',
        riwayatDM: 'Ya',
        riwayatHiperlipidemia: 'Ya',
        riwayatStroke: 'Tidak',
        riwayatGagalJantung: 'Tidak',
        riwayatPenyakitKronis: 'Artritis',
        riwayatObat: 'Obat Hipertensi',
		alamat: "Kecamatan X, Kabupaten Y, Provinsi Z",
        lamaRawat: '7 hari',
        keadaanKeluar: 'Membaik',
        durasiPenyakit: '5 tahun',
        obatLain: 'Vitamin D',
        durasiObat: 'Ya',
		noMedis: '123456789',
		noRegistrasi: '987654321',
      },
      {
        jenisKelamin: 'Laki-laki',
        usia: 30,
        pendidikan: 'Diploma',
        pekerjaan: 'Wiraswasta',
        pembiayaan: 'Asuransi Swasta',
        tandaVital: 'Tekanan darah 110/70, Nadi 75 bpm',
        riwayatHipertensi: 'Tidak',
        riwayatDM: 'Tidak',
        riwayatHiperlipidemia: 'Tidak',
        riwayatStroke: 'Tidak',
        riwayatGagalJantung: 'Tidak',
        riwayatPenyakitKronis: 'Tidak ada',
        riwayatObat: 'Tidak ada',
		alamat: "Kecamatan M, Kabupaten N, Provinsi C",
        lamaRawat: '2 hari',
        keadaanKeluar: 'Sembuh',
        durasiPenyakit: '1 minggu',
        obatLain: 'Tidak ada',
        durasiObat: 'Tidak',
		noMedis: '123456789',
		noRegistrasi: '987654321',
      },
  ]);
  const tab = ref(null)
  const items = ref([
    'DATA UMUM', 'DATA PEMRIKSAAN FISIK DAN LABORATORIUM ', 'DATA SPESIFIK TERKAIT PENYAKIT STEMI', 'DATA BAGIAN KEUANGAN',
  ])

  const handleExcelData = async (val) => {
    // form.value.unit = val
  }

  const getTabs = async () => {

  }

  return {
    page,
    breadcrumbs,
    dialog,
    process,
    headers,
    rows,
    tab,
    items,
    handleExcelData,
    getTabs
  };
}
