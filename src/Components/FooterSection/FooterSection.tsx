'use client'
import React from "react"
import Modal from 'react-modal'

export default function Footer() {
    const year = new Date()
    const customStyle = {
        content: {

        },
        overlay: {
            background: '#000000A9'

        }
    }

    const [modalIsOpen, setIsOpen] = React.useState(false)
    const [modalIsOpenb, setIsOpenb] = React.useState(false)

    function openModal() {
        document.body.style.overflow = 'hidden';
        window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
        setIsOpen(true)
    }

    function closeModal() {
        document.body.style.overflow = 'scroll'
        setIsOpen(false)
    }
    function openModalb() {
        document.body.style.overflow = 'hidden';
        window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
        setIsOpenb(true)
    }

    function closeModalb() {
        document.body.style.overflow = 'scroll'
        setIsOpenb(false)
    }

    return (
        <>
            <div className="gap-8 py-10 px-5 md:py-16 md:px-28 sm:py-10 sm:px-5 bg-black flex flex-wrap place-content-between">
                <div className="grid gap-6">
                    <img src="/Logo.png" placeholder="img_logo" />
                    <div className="grid gap-3">
                        <div className="text-white flex gap-8">
                            {/* Modal 1 */}
                            <a href="#" onClick={openModal}>
                                <p className="hover:cursor-pointer hover:text-blue-400">Syarat & Ketentuan</p></a>
                            <div className="flex justify-center items-center ">
                                <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={{
                                    content: {
                                        width: '50%',
                                        marginLeft: 'auto',
                                        marginRight: 'auto',
                                        marginTop: 30,
                                        height: '80%',
                                        overflow: 'scroll'
                                    },
                                    overlay: {
                                        background: '#0000005B',
                                    }
                                }} className={" bg-white rounded-lg"}>
                                    <h2 className=" font-semibold text-xl sticky top-0 bg-white p-3 text-gray-700">Syarat & Ketentuan</h2>
                                    <div className="grid gap-4 text-[#666666] p-3 text-sm">
                                        <>
                                            <h5>Syarat &amp; Ketentuan Penggunaan</h5>
                                            <p>
                                                Situs Web ini dimiliki dan dikelola oleh{" "}
                                                <span style={{ fontWeight: 600 }}>PT DIO RUMAH DIGITAL</span>, sebuah platform
                                                peer to peer landing yang mempertemukan antara Developer dengan para
                                                Investor untuk bekerjasama dalam membuat kawasan perumahan. Bacalah
                                                ketentuan-ketentuan penggunaan situs ini dengan cermat dan teliti sebelum
                                                Anda mulai menggunakan situs dan layanan kami. Dengan mengakses dan/atau
                                                menggunakan situs dan layanan kami, anda menyatakan bahwa Anda telah membaca
                                                dan menyetujui untuk terikat secara hukum oleh Ketentuan-ketentuan
                                                penggunaan situs web kami.
                                            </p>
                                            <p style={{ marginTop: 20 }}>
                                                Situs Web ini memungkinkan para penggunanya untuk mengakses berbagai materi
                                                dan informasi pilihan investasi dalam bidang properti secara online. Materi
                                                ini dapat berupa surat perjanjian keanggotaan dan informasi lainnya terkait
                                                dengan produk dan layanan investasi yang ditawarkan oleh{" "}
                                                <span style={{ fontWeight: 600 }}>HomeFunding</span>. Situs Web ini juga
                                                berisi teks, gambar, grafik, logo, dan informasi lainnya (yang secara umum
                                                dikenal sebagai Konten).
                                            </p>
                                            <p style={{ marginTop: 20 }}>
                                                Mohon untuk diperhatikan, ketika Anda mengakses dan menggunakan Situs Web
                                                ini, Anda tunduk kepada Persyaratan berikut serta semua hukum dan peraturan
                                                yang berlaku. Silahkan baca persyaratan ini dengan seksama. Jika Anda tidak
                                                menerima dan setuju untuk terikat oleh syarat atau ketentuan berikut, Anda
                                                tidak diizinkan untuk mengakses atau menggunakan Situs Web, Layanan atau
                                                Konten dalam Situs Web ini. Namun jika Anda mengakses dan menggunakan Situs
                                                Web berarti Anda telah menerima dan setuju untuk patuh terhadap setiap
                                                persyaratan dan ketentuan yang ditetapkan dibawah ini.
                                            </p>
                                            <h5>Persetujuan</h5>
                                            <p>
                                                <span style={{ fontWeight: 600 }}>HomeFunding</span> berhak untuk
                                                mengubah, memodifikasi, menunda atau menghentikan semua atau setiap bagian
                                                dari situs atau Layanan setiap saat.{" "}
                                                <span style={{ fontWeight: 600 }}>HomeFunding</span> juga dapat
                                                menentukan batas pada fitur-fitur tertentu atau membatasi akses Anda ke
                                                bagian atau seluruh situs atau Layanan tanpa pemberitahuan atau tanggung
                                                jawab.
                                            </p>
                                            <p>
                                                <span style={{ fontWeight: 600 }}>HomeFunding</span> dapat dari waktu ke
                                                waktu memodifikasikan atau mengubah Ketentuan-Ketentuan Penggunaan ini
                                                dengan memposting perubahan Ketentuan Penggunaan pada situs ini. Setiap
                                                penggunaan situs atau Layanan setelah perubahan Ketentuan Penggunaan ini
                                                akan dianggap sebagai penerimaan atas perubahan Ketentuan Penggunaan oleh
                                                Anda. Jika Anda tidak setuju pada perubahan Ketentuan Penggunaan, Anda
                                                memiliki hak untuk menutup akun dan/atau berhenti menggunakan situs dan
                                                Layanan. Periksa halaman ini dari waktu ke waktu karena perubahan, variasi
                                                dan koreksi terhadap Ketentuan Penggunaan akan mengikat Anda.
                                            </p>
                                            <p>
                                                Setiap orang dilarang untuk menggunakan materi dan informasi yang terdapat
                                                dalam Situs Web ini di dalam negara atau yurisdiksi dimana penggunaan
                                                tersebut dianggap melanggar hukum. Jika Anda melanggar hukum maka Anda tidak
                                                diizinkan untuk mengakses atau menggunakan informasi apa pun di dalam Web
                                                ini.
                                            </p>
                                            <h5>Kepemilikan dan Pembatasan-Pembatasan Hak Cipta</h5>
                                            <p>
                                                Semua Konten dan Perangkat Lunak yang terdapat dalam Situs Web ini adalah
                                                karya yang mengandung hak cipta milik{" "}
                                                <span style={{ fontWeight: 600 }}>HomeFunding</span> dan dilindungi oleh
                                                Undang-Undang Hak Cipta. Kompilasi dari semua konten dan perangkat lunak
                                                yang merupakan hak ekslusif dari HomeFunding dilindungi oleh Undang-Undang
                                                Hak Cipta. Anda dapat mengunduh informasi dari Situs Web ini dan mencetaknya
                                                untuk digunakan secara pribadi dengan syarat Anda tetap menjaga keutuhannya
                                                dan tidak menghapus atau mengubah hak cipta atau pemberitahuan lain yang
                                                terkandung dalam informasi tersebut.
                                            </p>
                                            <p>
                                                <span style={{ fontWeight: 600 }}>HomeFunding</span> dengan ini
                                                memberikan Anda izin terbatas untuk mengakses dan menggunakan secara pribadi
                                                Situs Web ini tetapi Anda tidak diizinkan untuk mengunduh atau memodifikasi
                                                seluruh atau sebagian dari Situs Web kecuali dengan persetujuan tertulis
                                                dari <span style={{ fontWeight: 600 }}>HomeFunding</span> Seluruh atau
                                                sebagian dari Situs Web ini tidak boleh direproduksi, diduplikasi, disalin,
                                                dijual, dijual kembali, dikunjungi, atau dimanfaatkan untuk tujuan komersial
                                                tanpa persetujuan tertulis dari{" "}
                                                <span style={{ fontWeight: 600 }}>HomeFunding</span>. Anda tidak
                                                diperkenankan mem-frame atau menggunakan teknik framing untuk menyertakan
                                                setiap merek dagang, logo, atau informasi berpemilik lainnya (termasuk
                                                gambar, teks, tata letak halaman, atau bentuk) yang menjadi milik{" "}
                                                <span style={{ fontWeight: 600 }}>HomeFunding</span> dan afiliasinya
                                                tanpa persetujuan tertulis yang jelas. Anda tidak diperkenankan menggunakan
                                                “meta-tag” atau “teks tersembunyi” lainnya yang menggunakan nama atau merek
                                                jasa apapun tanpa persetujuan tertulis dari{" "}
                                                <span style={{ fontWeight: 600 }}>HomeFunding</span> Setiap penggunaan
                                                yang tidak diperkenankan akan mengakhiri persetujuan atau izin yang
                                                diberikan oleh <span style={{ fontWeight: 600 }}>HomeFunding.</span>
                                            </p>
                                            <p>
                                                Informasi yang disampaikan melalui Situs Web ini. Kecuali data-data pribadi
                                                atau informasi yang Anda berikan, setiap informasi yang Anda kirimkan kepada
                                                HomeFunding melalui Situs Web ini, apakah dimasukkan secara langsung,
                                                diberikan melalui surat elektronik atau lainnya, termasuk data, pertanyaan,
                                                komentar, atau saran, akan diperlakukan sebagai hal yang bukan rahasia dan
                                                tidak berpemilik dan akan menjadi milik dari{" "}
                                                <span style={{ fontWeight: 600 }}>HomeFunding</span> Informasi tersebut
                                                dapat digunakan untuk tujuan apapun, termasuk namun tidak terbatas pada
                                                reproduksi, penawaran, pengungkapan, pengiriman, penerbitan, penyiaran, dan
                                                posting. <span style={{ fontWeight: 600 }}>HomeFunding</span> bebas
                                                menggunakan setiap gagasan, konsep, pengetahuan, atau teknik yang terkandung
                                                dalam setiap komunikasi yang Anda kirimkan kepada{" "}
                                                <span style={{ fontWeight: 600 }}>HomeFunding</span> melalui Situs Web
                                                ini atau dengan cara lain untuk tujuan apapun, termasuk, namun tidak
                                                terbatas pada, mengembangkan dan memasarkan produk-produk menggunakan
                                                informasi tersebut.
                                            </p>
                                            <h5>Penggunaan Yang Dilarang</h5>
                                            <p>
                                                Hal-hal berikut adalah dilarang bagi setiap penggunaan atau percobaan
                                                penggunaan dari Situs Web ini yaitu:
                                            </p>
                                            <p>
                                                1. Untuk tujuan-tujuan yang melanggar hukum, tidak berizin, menipu atau
                                                maksud-maksud jahat lainnya.
                                            </p>
                                            <p>
                                                2. Yang dapat merusak, melumpuhkan, membebani, atau merusak server apapun,
                                                atau jaringan yang terhubung ke server apapun.
                                            </p>
                                            <p>
                                                3. Untuk mengganggu penggunaan pihak lain dan kepuasan yang didapat dari
                                                menggunakan Situs Web ini.
                                            </p>
                                            <p>
                                                4. Untuk mendapatkan akses yang tidak berizin ke akun, sistem komputer atau
                                                jaringan lain apapun yang terhubung ke server atau sistem melalui peretasan,
                                                pencurian password atau cara lainnya.
                                            </p>
                                            <p>
                                                5. Untuk mengakses sistem, data atau informasi yang oleh Pemilik tidak
                                                dimaksudkan untuk diakses oleh pengguna.
                                            </p>
                                            <p>
                                                6. Untuk mendapatkan materi atau informasi apapun dengan cara apapun yang
                                                oleh Pemilik tidak dimaksudkan untuk diberikan, atau untuk penggunaan
                                                lainnya selain untuk kepentingan usaha yang menjadi maksud diadakannya Situs
                                                Web ini.
                                            </p>
                                            <p>
                                                Selain itu, sehubungan dengan penggunaan Anda atas Situs ini, Anda setuju
                                                untuk tidak:
                                            </p>
                                            <p>
                                                1. Mengunggah atau mengirimkan pesan, informasi, data, teks, perangkat lunak
                                                atau gambar, atau konten lain (“Materi”) yang melanggar hukum, membahayakan,
                                                mengancam, merugikan, melecehkan, menyakiti, mencemarkan nama baik, kasar,
                                                cabul, memfitnah, atau hal-hal lain yang tidak diterima, atau yang mungkin
                                                melanggar hak orang lain akan privasi atau publisitas;
                                            </p>
                                            <p>
                                                2. Membuat identitas palsu dengan maksud untuk menyesatkan orang lain atau
                                                berkedok sebagai orang atau kelompok, termasuk namun tidak terbatas pada
                                                orang yang mewakili Chubb Group, atau secara tidak benar menyatakan atau
                                                menggambarkan diri Anda memiliki afiliasi dengan seseorang atau entitas
                                                tertentu;
                                            </p>
                                            <p>
                                                3. Mengunggah atau mengirimkan Materi yang bukan menjadi hak Anda untuk
                                                direproduksi, ditampilkan atau dikirimkan berdasarkan Undang-Undang atau
                                                ikatan kontrak atau hubungan fidusiari (misalnya persetujuan untuk menjaga
                                                kerahasiaan);
                                            </p>
                                            <p>
                                                4. Mengunggah atau memasukkan file-file yang berisi virus, Trojan horse,
                                                worm, bom waktu, cancel-bot, file yang korup, atau perangkat lunak atau
                                                program serupa lain yang dapat merusak pengoperasian komputer atau barang
                                                milik orang lain;
                                            </p>
                                            <p>
                                                5. Menghapus atribusi terhadap pengarang, pemberitahuan hukum atau hal-hal
                                                yang berpemilik atau label yang Anda unggah ke bentuk komunikasi apapun;
                                            </p>
                                            <p>
                                                6. Menggunakan fitur komunikasi Situs Web ini dengan cara yang memberikan
                                                dampak negatif terhadap ketersediaan sumber dayanya bagi pengguna lain
                                                (misalnya, shouting berlebihan, menggunakan huruf besar, atau terus menerus
                                                membanjirinya dengan posting dan teks berulang);
                                            </p>
                                            <p>
                                                7. Mengunggah atau mengirimkan segala bentuk iklan yang tidak diminta,
                                                materi promosi, “junk mail,” “spam,” “surat berantai,” “skema piramida” atau
                                                segala bentuk penawaran lain, iklan komersial atau yang lainnya;
                                            </p>
                                            <p>
                                                8. Melanggar hukum yang berlaku, baik itu hukum lokal, daerah, nasional
                                                maupun internasional;
                                            </p>
                                            <p>
                                                9. Mengunggah atau mengirimkan setiap Materi yang melanggar hak paten, merek
                                                dagang, merek jasa, rahasia dagang, hak cipta atau hak kepemilikan lainnya
                                                dari pihak manapun;
                                            </p>
                                            <p>
                                                10. Menghapus atau merevisi setiap Materi yang diposting oleh setiap orang
                                                atau entitas lain;
                                            </p>
                                            <p>
                                                11. Memanipulasi atau menampilkan Situs Web ini dengan menggunakan teknik
                                                framing, mirroring atau teknologi navigasi sejenis atau membuat link
                                                langsung ke bagian apapun dari Situs Web ini selain halaman utama,
                                                HomeFunding, sesuai dengan izin terbatas dan akses terhadap Situs Web
                                                seperti yang diuraikan di atas;
                                            </p>
                                            <p>
                                                12. Mendaftarkan, melanggankan, mencoba untuk mendaftarkan, mencoba untuk
                                                melanggankan, berhenti melanggankan, atau mencoba untuk berhenti
                                                melanggankan, pihak manapun untuk Produk atau Layanan apapun jika Anda tidak
                                                mendapat izin secara jelas dari pihak tersebut untuk melakukannya, atau
                                            </p>
                                            <p>
                                                13. Mengambil atau mengumpulkan informasi tentang orang lain, termasuk
                                                alamat-alamat e-mail.
                                            </p>
                                            <p>
                                                <span style={{ fontWeight: 600 }}>HomeFunding</span> berhak untuk
                                                mengambil tindakan hukum apa pun yang dianggap perlu terhadap pelanggaran
                                                atau dugaan pelanggaran terhadap hal-hal yang telah disebutkan di atas,
                                                termasuk menghentikan akses dan/atau akun pengguna.{" "}
                                                <span style={{ fontWeight: 600 }}>HomeFunding</span> dapat bekerja sama
                                                dengan penegak hukum dan/atau pihak ketiga dalam penyelidikan terhadap
                                                sangkaan atau dugaan kejahatan pidana maupun perdata.{" "}
                                                <span style={{ fontWeight: 600 }}>HomeFunding</span> setiap saat berhak
                                                untuk mengungkap informasi apapun yang dianggap perlu untuk memenuhi
                                                letaatan terhadap hukum yang berlaku, peraturan, proses hukum atau
                                                permintaan pemerintah, atau untuk mengedit, menolak untuk memposting atau
                                                menghapus informasi atau materi apapun, baik sebagian maupun keseluruhan,
                                                sesuai dengan kebijakan yang diambil oleh{" "}
                                                <span style={{ fontWeight: 600 }}>HomeFunding</span>
                                            </p>
                                            <h5>Layanan Interaktif</h5>
                                            <p>
                                                1. Kami dapat dari waktu ke waktu menyediakan layanan-layanan berikut di
                                                situs, Konten situs, Layanan kami, termasuk, tetapi tidak terbatas pada:
                                                <br />
                                                a. Chat room;
                                                <br />
                                                b. Fungsi-fungsi media sosial lain;
                                            </p>
                                            <p>
                                                2. Apabila kami menyediakan setiap Layanan Interaktif, kami akan menyediakan
                                                informasi yang jelas kepada Anda tentang jenis layanan yang ditawarkan, jika
                                                untuk layanan ada moderatornya, dan bentuk moderasi apa yang digunakan
                                                (termasuk apakah dilakukan oleh manusia atau lainnya).
                                            </p>
                                            <p>
                                                3. Kami akan melakukan upaya-upaya yang wajar secara komersial untuk menilai
                                                setiap potensi risiko terhadap Para Pengguna dari para pihak ketiga ketika
                                                mereka menggunakan setiap Layanan Interaktif yang disediakan di situs kami,
                                                dan kami akan memutuskan dalam setiap hal apakah tepat untuk menggunakan
                                                moderasi dari layanan yang relevan tersebut (termasuk jenis moderasi yang
                                                digunakan) dalam menangani risiko-risiko tersebut. Namun, kami tidak
                                                berkewajiban untuk mengawasi, memantau atau memoderasi setiap Layanan
                                                Interaktif yang kami sediakan di situs kami, dan kami dengan tegas
                                                mengecualikan kewajiban kami atas setiap kerugian yang timbul dari
                                                penggunaan Layanan Interaktif oleh Pengguna yang bertentangan dengan standar
                                                konten, terlepas apakah layanan itu dimoderasi atau tidak.
                                            </p>
                                            <p>
                                                4. Jika kami memoderasi Layanan Interaktif, kami biasanya akan menyediakan
                                                sarana untuk menghubungi moderator, apabila muncul masalah atau kesulitan.
                                            </p>
                                            <p>
                                                5. Anda bertanggung jawab secara mutlak atas interaksi Anda dengan Para
                                                Pengguna lain. Kami melindungi hak, tetapi tidak berkewajiban, untuk
                                                memantau sengketa antara Anda dan Para Pengguna lain.
                                            </p>
                                            <h5>Keamanan dan Pengendalian</h5>
                                            <p>
                                                Sebagai transparasi ke investor, HomeFunding akan mengacu pada peraturan OJK
                                                untuk perlindungan dana investor, HomeFunding akan memberlakukan otomatis
                                                withdraw saldo mengendap ke akun bank masing-masing investor yang terdaftar
                                                pada H+2 selesainya proyek apabila saldo tidak digunakan untuk mendanai
                                                proyek lainnya.
                                            </p>
                                            <p>
                                                Anda harus melengkapi proses pendaftaran dengan memberikan informasi Anda
                                                yang terbaru, lengkap, dan akurat sebagaimana yang diminta di dalam form
                                                pendaftaran tersebut, dan menentukan password dan nama pengguna. Anda
                                                sepenuhnya bertanggung jawab untuk menjaga kerahasiaan password dan akun dan
                                                untuk menjaga semua aktivitas yang terjadi di dalam akun Anda. Dengan ini
                                                Anda juga setuju untuk :
                                            </p>
                                            <p>
                                                a. Secepatnya memberitahu Pemilik jika akun Anda digunakan tanpa seizing
                                                Anda atau jika Anda mengetahui adanya pelanggaran terhadap keamanan.
                                                <br />
                                                b. Benar-benar keluar dari akun di akhir setiap sesi online.
                                                HomeFundingtidak akan bertanggung jawab atas kerugian yang mungkin timbul
                                                sebagai akibat dari password atau akun Anda digunakan oleh orang lain.
                                            </p>
                                            <p>
                                                Ketika Anda mengunjungi Situs Web ini atau mengirimkan e-mail kepada kami,
                                                Anda telah berkomunikasi dengan kami secara elektronik. Anda setuju untuk
                                                menerima komunikasi dari kami secara elektronik. Kami akan berkomunikasi
                                                dengan Anda melalui e-mail atau dengan memasang pemberitahuan di situs ini.
                                                Anda setuju bahwa semua perjanjian, pemberitahuan, pengungkapan dan
                                                komunikasi lain yang kami sediakan kepada Anda secara elektronik memenuhi
                                                segala persyaratan hukum seperti halnya komunikasi yang dilakukan secara
                                                tertulis.
                                            </p>
                                            <h5>Dokumen Lainnya yang Berlaku</h5>
                                            <p>
                                                1. Selain ketentuan-ketentuan pengguna ini, hal yang juga berlaku terhadap
                                                para pengguna Situs ini adalah:
                                            </p>
                                            <p>
                                                a. Kebijakan Privasi, yang menetapkan ketentuan-ketentuan yang berlaku
                                                ketika kami mengola data pribadi Anda yang Anda berikan kepada kami.
                                                <br />
                                                b. Dengan menggunakan situs kami, Anda telah setuju dengan pengumpulan,
                                                penggunaan, pengungkapan data pribadi Anda dan Anda menjamin bahwa data yang
                                                diberikan adalah benar dan akurat.
                                                <br />
                                                c. Kebijakan Cookie, yang menetapkan informasi tentang cookie pada situs
                                                kami. Perjanjian Keanggotaan, yang berlaku untuk penggunaan Anda atas
                                                layanan sebagai pengguna terdaftar.
                                            </p>
                                            <p>
                                                2. Jika terdapat pertentangan antara Ketentuan-Ketentuan Penggunaan ini dan
                                                perjanjian lain yang berlaku untuk aspek-aspek khusus dari Layanan, yang
                                                berlaku adalah perjanjian lain itu dalam kaitannya dengan aspek-aspek khusus
                                                dari Layanan yang kepadanya perjanjian itu berlaku.
                                            </p>
                                        </>

                                    </div>
                                    <div className="border-t-2 font-semibold text-[18px] sticky bottom-0 bg-white p-3 text-white text-base flex justify-end">
                                        <button className="bg-[#4169E1] px-9 rounded-sm py-1" onClick={closeModal}>Tutup</button>
                                    </div>
                                </Modal>
                            </div>

                            {/* Modal 2 */}
                            <a href="#" onClick={openModalb}>
                                <p className="hover:cursor-pointer  hover:text-blue-400">Kebijakan Privasi</p></a>
                            <div className="flex justify-center items-center ">
                                <Modal isOpen={modalIsOpenb} onRequestClose={closeModalb} style={{
                                    content: {
                                        width: '50%',
                                        marginLeft: 'auto',
                                        marginRight: 'auto',
                                        marginTop: 30,
                                        height: '80%',
                                        overflow: 'scroll'
                                    },
                                    overlay: {
                                        background: '#0000005B',
                                    }
                                }} className={" bg-white rounded-lg"}>
                                    <h2 className=" font-semibold text-xl sticky top-0 bg-white p-3 text-gray-700">Kebijakan Privasi</h2>
                                    <div className="grid gap-4 text-[#666666] p-3 text-sm">
                                        <>
                                            <h5 style={{ fontWeight: 600, fontSize: 20 }}>Gambaran Singkat</h5>
                                            <p>
                                                1. {" "} <span style={{ fontWeight: 600 }}>HomeFunding</span> berkomitmen untuk menjaga, melindungi dan menghormati kerahasiaan privasi Anda.
                                            </p>
                                            <p>2. Anda dapat memberikan informasi mengenai diri Anda secara akurat, benar, dan terkini kepada {" "} <span style={{ fontWeight: 600 }}>HomeFunding</span>.
                                            </p>
                                            <p>3. Kebijakan Privasi ini berlaku untuk semua orang dan institusi, baik sebagai investor, developer, pemilik lahan, dan agen pemasaran yang menggunakan Situs ini. Dengan Anda mengakses layanan yang tersedia melalui Situs kami, Anda dengan ini mengakui bahwa Anda telah membaca dan menyetujui seluruh ketentuan kami.
                                            </p>
                                            <p>4. Kebijakan Privasi dirancang untuk membantu Anda mengetahui dan memahami bagaimana kami mengumpulkan, menggunakan, dan/atau mengolah Data pribadi yang Anda telah berikan kepada kami, serta membantu Anda dalam mengambil keputusan yang diberitahukan sebelum memberikan Data pribadi Anda kepada kami.
                                            </p>
                                            <h5 style={{ fontWeight: 600, fontSize: 20, marginTop: 30 }}>Penggunaan Informasi dan Data Pribadi</h5>
                                            <p>1. {" "} <span style={{ fontWeight: 600 }}>HomeFunding</span> dapat mengumpulkan informasi dan data tentang Anda, baik yang secara langsung diberikan oleh Anda atau dari pihak lain yang diizinkan oleh Anda.
                                            </p>
                                            <p>2. Jika kami anggap perlu, data pribadi Anda dapat digunakan dan diungkapkan oleh {" "} <span style={{ fontWeight: 600 }}>HomeFunding</span> untuk tujuan berikut ini:
                                            </p>
                                            <p style={{ marginLeft: 10 }}>
                                                a. memberikan akses kepada Anda dan memfasilitasi penggunaan Situs kami dan memastikan bahwa Konten Situs, Produk, Layanan, dan Layanan Interaktif ditampilkan dengan cara yang paling efektif untuk Anda <br style={{ marginBottom: 10 }} />
                                                b. memberikan kepada Anda informasi, Konten Situs, Produk, Layanan dan Layanan Interaktif yang Anda minta dari kami <br style={{ marginBottom: 10 }} />
                                                c. memberikan kepada Anda informasi, Konten Situs, Produk, Layanan dan Layanan Interaktif yang Anda minta dari kami <br style={{ marginBottom: 10 }} />
                                                d. memberikan kepada Anda informasi tentang Produk atau Layanan kepada Anda yang kami rasa mungkin menarik bagi Anda. Apabila Anda telah menjadi Pengguna, kami hanya akan menghubungi Anda melalui email, SMS atau telepon untuk memberikan Informasi tentang Produk dan Layanan yang serupa dengan yang sebelumnya telah Anda pertimbangkan, pendanaan atau manfaatkan <br style={{ marginBottom: 10 }} />
                                                e. memberitahu kepada Anda tentang perubahan-perubahan di Situs, Konten Situs, Produk, Layanan, Layanan Interaktif <br style={{ marginBottom: 10 }} />
                                                f. mengelola Situs kami dan untuk pengoperasian internal, termasuk pemecahan masalah (troubleshooting), analisis data, pengujian, penelitian, tujuan statistik dan survei <br style={{ marginBottom: 10 }} />
                                                g. meningkatkan Situs kami untuk memastikan bahwa Konten Situs, Produk, Layanan, dan Layanan Interaktif disampaikan dengan cara yang paling efektif untuk Anda <br style={{ marginBottom: 10 }} />
                                                h. membuat saran dan rekomendasi untuk Anda dan Para Pengguna lain Situs kami tentang Produk, Layanan yang mungkin menarik bagi Anda atau mereka <br style={{ marginBottom: 10 }} />
                                                i. membuat keputusan yang berkaitan dengan pembukaan atau kelanjutan akun pengguna dan pembuatan, penyediaan atau kelanjutan dari layanan dan produk selain itu menjaga akurasi informasi "kenali pelanggan Anda" dan melakukan pemeriksaan anti pencucian uang, kredit dan latar belakang <br style={{ marginBottom: 10 }} />
                                                j. menyediakan, mengoperasikan, memproses dan mengelola akun pengguna, layanan dan produk atau mengelola aplikasi-aplikasi untuk akun pengguna, layanan dan produk, setiap transaksi (termasuk transaksi pengiriman uang), dan menjaga kualitas layanan dan melatih staf <br style={{ marginBottom: 10 }} />
                                                k. menyediakan atau memberikan akses kepada materi-materi terkait Produk seperti dokumen penawaran, laporan, profil produk, lembar ketentuan (term sheet) atau materi-materi lain terkait produk <br style={{ marginBottom: 10 }} />
                                                l. melakukan penilaian risiko, analisis dan perencanaan statistik dan tren, termasuk melaksanakan pengolahan data, analisis statistik, kredit, risiko dan anti pencucian uang, membuat dan mengelola model penilaian kredit, melakukan pemeriksaan dan peninjauan kredit dan latar belakang lain, dan menyimpan sejarah kredit Anda untuk referensi saat ini dan di masa mendatang <br style={{ marginBottom: 10 }} />
                                                m. memantau dan mencatat panggilan dan komunikasi elektronik dengan Anda untuk tujuan pencatatan, kualitas, pelatihan, investigasi, dan pencegahan penipuan <br style={{ marginBottom: 10 }} />
                                                n. mendeteksi, mencegah, melakukan penyidikan dan mendakwa kejahatan dan penipuan termasuk membantu dalam setiap penyidikan kejahatan oleh otoritas yang relevan terhadap Anda, individu yang relevan atau orang lain <br style={{ marginBottom: 10 }} />
                                                o. melakukan menajemen internal untuk mengoperasikan sistem informasi kontrol dan manajemen dan melaksanakan audit internal atau mengizinkan pelaksanaan audit eksternal <br style={{ marginBottom: 10 }} />
                                                p. mengelola hubungan {" "} <span style={{ fontWeight: 600 }}>HomeFunding</span> dengan Anda, yang dapat termasuk menyediakan informasi kepada Anda atau individu yang relevan, tentang produk dan layanan {" "} <span style={{ fontWeight: 600 }}>HomeFunding</span>, apabila secara khusus disetujui atau apabila diizinkan berdasarkan peraturan perundang-undangan yang berlaku <br style={{ marginBottom: 10 }} />
                                                q. untuk memasarkan produk atau layanan keuangan atau yang terkait dengan investasi melalui berbagai cara komunikasi termasuk surat, telepon, SMS, fax, email, internet, riset pasar, dan merancang atau menyaring produk atau layanan yang serupa termasuk dengan melakukan riset pasar, analisis data, dan survei <br style={{ marginBottom: 10 }} />
                                                r. mematuhi setiap kewajiban, persyaratan, kebijakan, prosedur, penilaian atau pengaturan untuk berbagi data dan informasi dalam {" "} <span style={{ fontWeight: 600 }}>HomeFunding</span> dan penggunaan data dan informasi lainnya sesuai dengan setiap program {" "} <span style={{ fontWeight: 600 }}>HomeFunding</span> untuk pemenuhan sanksi atau pencegahan atau pendeteksian pencucian uang, pendanaan teroris atau kegiatan melanggar hukum lainnya.
                                            </p>
                                            <p>3. Kami dapat menggabungkan setiap informasi dan data, terlepas dari bagaimana informasi dan data tersebut diberikan kepada kami atau dikumpulkan oleh kami untuk tujuan memberikan kepada Anda produk dan layanan kami.
                                            </p>
                                            <p>4. Sebagaimana tujuan dari kami dapat mengumpulkan, menggunakan, mengungkapkan atau mengolah Data pribadi Anda tergantung pada keadaan pada saat itu, tujuan tersebut mungkin tidak muncul dalam poin di atas. Namun, kami akan memberitahu Anda tentang tujuan lain tersebut pada saat meminta persetujuan Anda untuk pengumpulan Data pribadi tersebut, kecuali pengolahan Data pribadi Anda tanpa persetujuan Anda yang diizinkan oleh hukum.
                                            </p>
                                            <p>5. Kami juga dapat berbagi Data pribadi dengan Para Pihak Ketiga Yang Dipilih termasuk:
                                            </p>
                                            <p style={{ marginLeft: 10 }}>
                                                a. para mitra usaha, pemasok dan sub-kontraktor untuk pelaksanaan setiap kontrak yang kami adakan dengan mereka atau Anda<br style={{ marginBottom: 10 }} />
                                                b. para pengiklan dan jaringan-jaringan iklan yang memerlukan data untuk memilih dan menyediakan iklan yang relevan kepada Anda dan orang lain<br style={{ marginBottom: 10 }} />
                                                c. penyedia analisis dan mesin pencari yang membantu kami dalam peningkatan dan optimalisasi situs kami<br style={{ marginBottom: 10 }} />
                                                d. calon penjual atau pembeli bisnis atau aset apabila kami menjual atau membeli bisnis atau aset apapun, dalam hal ini kami dapat mengalihkan Data pribadi Anda kepada pembeli atau penjual tersebut sebagai bagian dari transaksi<br style={{ marginBottom: 10 }} />
                                                e. setiap organisasi atau orang tersebut, jika kami berada di bawah kewajiban untuk mengungkapkan atau membagikan Data pribadi Anda untuk mematuhi setiap kewajiban hukum, atau untuk melaksanakan atau menerapkan Ketentuan-Ketentuan Penggunaan kami, dan perjanjian lainnya, atau untuk melindungi hak, aset, atau keamanan dari {" "} <span style={{ fontWeight: 600 }}>HomeFunding</span>, pelanggan kami, Para Pengguna atau lainnya. Ini termasuk bertukar informasi dengan perusahaan dan organisasi lain untuk tujuan perlindungan dari penipuan dan pengurangan risiko kredit<br style={{ marginBottom: 10 }} />
                                                f. agen, kontraktor atau penyedia layanan pihak ketiga yang menyediakan administrasi, pengiriman pos, telemarketing, telekomunikasi penjualan langsung, call center, proses bisnis, perjalanan, visa, manajemen pengetahuan, sumber daya manusia, pengolahan data, teknologi informasi, komputer, pembayaran, penagihan utang, referensi kredit atau pemeriksaan-pemeriksaan latar belakang lain atau layanan-layanan lain kepada {" "} <span style={{ fontWeight: 600 }}>HomeFunding</span> sehubungan dengan pengoperasian bisnis dari {" "} <span style={{ fontWeight: 600 }}>HomeFunding</span><br style={{ marginBottom: 10 }} />
                                                f. agen, kontraktor atau penyedia layanan pihak ketiga yang menyediakan administrasi, pengiriman pos, telemarketing, telekomunikasi penjualan langsung, call center, proses bisnis, perjalanan, visa, manajemen pengetahuan, sumber daya manusia, pengolahan data, teknologi informasi, komputer, pembayaran, penagihan utang, referensi kredit atau pemeriksaan-pemeriksaan latar belakang lain atau layanan-layanan lain kepada {" "} <span style={{ fontWeight: 600 }}>HomeFunding</span> sehubungan dengan pengoperasian bisnis dari {" "} <span style={{ fontWeight: 600 }}>HomeFunding</span><br style={{ marginBottom: 10 }} />
                                                g. orang atau entitas yang merupakan bagian dari Grup {" "} <span style={{ fontWeight: 600 }}>HomeFunding</span> walaupun hanya sepanjang diperlukan untuk memenuhi Tujuan Yang Diizinkan yang relevan<br style={{ marginBottom: 10 }} />
                                                h. bank tertarik atau penarik sehubungan dengan setiap cek atau yang setara yang diproses oleh {" "} <span style={{ fontWeight: 600 }}>HomeFunding</span> atau<br style={{ marginBottom: 10 }} />
                                                i. lembaga keuangan yang dengannya Anda memiliki atau mengajukan untuk memiliki urusan terkait dengan setiap Produk dan/atau Layanan<br style={{ marginBottom: 10 }} />
                                                j. lembaga keuangan, agen proses, atau pihak lain yang akan terlibat dalam transaksi pengiriman uang atau kegiatan perbankan/keuangan apapun<br style={{ marginBottom: 10 }} />
                                                k. penerima pengalihan yang sebenarnya atau yang diajukan dari {" "} <span style={{ fontWeight: 600 }}>HomeFunding</span> atau Grup {" "} <span style={{ fontWeight: 600 }}>HomeFunding</span>, atau peserta atau sub-peserta atau penerima pengalihan hak-hak {" "} <span style={{ fontWeight: 600 }}>HomeFunding</span> atau Grup {" "} <span style={{ fontWeight: 600 }}>HomeFunding</span> sehubungan dengan Anda atau Individu Yang Relevan lain, semua atau sebagian dari aset atau bisnis dari {" "} <span style={{ fontWeight: 600 }}>HomeFunding</span> atau Grup {" "} <span style={{ fontWeight: 600 }}>HomeFunding</span><br style={{ marginBottom: 10 }} />
                                                l. pihak yang memberikan atau mengajukan untuk memberikan jaminan atau jaminan pihak ketiga kepada penerima jaminan atau menjamin kewajiban-kewajiban Anda atau orang-orang dari Individu Yang Relevan manapun.
                                            </p>
                                            <p>
                                                6. Dalam hal ini, tujuan atas penggunaan dan pengungkapan informasi dan data tentang Anda yang dimaksud berdasarkan tujuan dari kebijakan ini secara kolektif selanjutnya disebut sebagai "Tujuan Yang Diizinkan".
                                            </p>
                                            <h5 style={{ fontWeight: 600, fontSize: 20, marginTop: 30 }}>Administrasi dan Pengelolaan Data pribadi Anda </h5>
                                            <p>1. Kami akan melakukan upaya yang wajar untuk memastikan bahwa Data pribadi Anda akurat dan lengkap, jika data pribadi Anda kemungkinan akan digunakan oleh {" "} <span style={{ fontWeight: 600 }}>HomeFunding</span> untuk membuat keputusan yang mempengaruhi Anda, atau mengungkapkan kepada organisasi lain. Namun, ini berarti bahwa Anda harus juga memberitahukan kepada kami setiap perubahan pada data pribadi Anda yang awalnya Anda berikan kepada kami. Kami tidak akan bertanggung jawab untuk mengandalkan data pribadi yang tidak akurat dan tidak lengkap yang diakibatkan karena Anda tidak memberitahukan kepada kami setiap perubahan pada Data pribadi Anda yang awalnya Anda berikan kepada kami.
                                            </p>
                                            <p>3. Kami juga akan menempatkan langkah-langkah yang memastikan Data pribadi Anda yang ada di bawah penguasaan atau berada di bawah kendali kami dimusnahkan dan/atau dijadikan bersifat anonim sesegera mungkin saat dianggap wajar untuk mengasumsikan bahwa:
                                            </p>
                                            <p style={{ marginLeft: 10 }}>
                                                (i) tujuan Data pribadi itu dikumpulkan tidak lagi dipenuhi dengan penyimpanan Data pribadi tersebut; dan <br style={{ marginBottom: 10 }} />
                                                (ii) penyimpanan tidak lagi perlu dilakukan untuk tujuan hukum atau bisnis lain apapun.<br style={{ marginBottom: 10 }} />
                                            </p>
                                            <p>4. Apabila Data pribadi Anda akan dipindahkan dari negara manapun di tempat Anda mengakses Situs ini, kami akan mematuhi hukum yang berlaku dalam melakukannya.
                                            </p>
                                            <h5 style={{ fontWeight: 600, fontSize: 20, marginTop: 30 }}>Hak Untuk Menolak Penggunaan Data pribadi Untuk Tujuan Pemasaran</h5>
                                            <p>Anda memiliki hak untuk meminta kami agar tidak mengolah Data pribadi Anda untuk tujuan pemasaran. Kami akan memberitahu Anda dan meminta persetujuan dari Anda sebelum kami menggunakan Data pribadi Anda untuk tujuan tersebut atau jika kami bermaksud mengungkapkan Data pribadi Anda kepada pihak ketiga manapun untuk tujuan tersebut. Anda dapat menggunakan hak Anda untuk menolak pengolahan tersebut dengan cara memberikan tanda pada formulir yang terkait yang kami gunakan untuk mengumpulkan data Anda. Bahkan setelah Anda memberikan persetujuan Anda atas Data pribadi yang akan digunakan untuk tujuan pemasaran, Anda dapat, setiap saat setelah itu, menarik persetujuan Anda dengan menghubungi kami di <u style={{ color: "#308AFF" }}>
                                                <a href="#">kontrakdana@gmail.com</a></u>
                                            </p>
                                            
                                            <h5 style={{ fontWeight: 600, fontSize: 20, marginTop: 30 }}>Link Ke Situs Lain</h5>
                                            <p>Situs kami dapat, dari waktu ke waktu, berisi link ke Situs-Situs Pihak Ketiga dan website dari jaringan mitra, pengiklan, afiliasi atau anak perusahaan kami. Jika Anda mengikuti suatu link ke salah satu website tersebut, perlu Anda ketahui bahwa website tersebut dapat memiliki atau tidak memiliki kebijakan privasi mereka sendiri dan bahwa kami tidak menerima tanggung jawab atau kewajiban atas kebijakan-kebijakan ini atau tidak adanya kebijakan-kebijakan ini. Bacalah kebijakan ini sebelum Anda menyerahkan informasi apapun termasuk Data pribadi Anda pada website tersebut.
                                            </p>
                                            
                                            <h5 style={{ fontWeight: 600, fontSize: 20, marginTop: 30 }}>Akses ke Informasi</h5>
                                            <p>1. Anda memiliki hak untuk meminta kepada kami Data pribadi tentang Anda yang disimpan oleh {" "} <span style={{ fontWeight: 600 }}>HomeFunding</span>. Jika Anda ingin mengakses, memutakhirkan atau mengubah atau menghapus setiap informasi yang Anda berikan kepada kami, hubungi kami di <u style={{ color: "#308AFF" }}>
                                                <a href="#">kontrakdana@gmail.com</a></u> untuk mendapatkan bantuan.
                                            </p>
                                            <p>2. Dalam keadaan-keadaan luar biasa, {" "} <span style={{ fontWeight: 600 }}>HomeFunding</span> dapat menolak akses Anda ke Data pribadi Anda tetapi kami akan memberikan kepada Anda penjelasan tentang alasan yang mencegah kami melakukan hal itu berdasarkan hukum yang berlaku. Keadaan-keadaan luar biasa tersebut termasuk tetapi tidak terbatas pada apabila:
                                            </p>
                                            <p style={{ marginLeft: 10 }}>
                                                a. para mitra usaha, pemasok dan sub-kontraktor untuk pelaksanaan setiap kontrak yang kami adakan dengan mereka atau Anda<br style={{ marginBottom: 10 }} />
                                                b. para pengiklan dan jaringan-jaringan iklan yang memerlukan data untuk memilih dan menyediakan iklan yang relevan kepada Anda dan orang lain<br style={{ marginBottom: 10 }} />
                                                c. penyedia analisis dan mesin pencari yang membantu kami dalam peningkatan dan optimalisasi situs kami
                                            </p>
                                        </>

                                    </div>
                                    <div className="border-t-2 font-semibold text-[18px] sticky bottom-0 bg-white p-3 text-white text-base flex justify-end">
                                        <button className="bg-[#4169E1] px-9 rounded-sm py-1" onClick={closeModalb}>Tutup</button>
                                    </div>
                                </Modal>
                            </div>


                        </div>
                        {/* <div className="text-white flex gap-3 flex-wrap">
                            <div className="hover:cursor-pointer  hover:text-blue-400" >About</div>
                            <div className="hover:cursor-pointer  hover:text-blue-400">Feature</div>
                            <div className="hover:cursor-pointer  hover:text-blue-400">Pricing</div>
                            <div className="hover:cursor-pointer  hover:text-blue-400">News</div>
                            <div className="hover:cursor-pointer  hover:text-blue-400">Help</div>
                            <div className="hover:cursor-pointer  hover:text-blue-400">Contact</div>
                            <div className="hover:cursor-pointer  hover:text-blue-400">FAQ</div>
                            <div className="hover:cursor-pointer  hover:text-blue-400">Carrier</div>
                        </div> */}

                    </div>
                    <p className="text-sm text-[#D1D5DB]">© Copyright {year.getFullYear()} PT DIO RUMAH DIGITAL - All rights reserved</p>

                </div>

                <div className="text-white space-y-4">
                    <p className="text-lg font-medium">Get the App</p>
                    <div className="flex space-x-[6.74px] pt-[8.44px] pb-[6.51px] pl-[18px] pr-[17.5px] border-2 border-current rounded-lg hover:cursor-pointer">
                        <svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="&#60;Group&#62;">
                                <path id="&#60;Path&#62;" d="M14.7973 12.3006C14.8081 11.4659 15.0298 10.6475 15.4418 9.92158C15.8538 9.19563 16.4428 8.58569 17.1539 8.14851C16.7021 7.50335 16.1062 6.97241 15.4134 6.59786C14.7205 6.22331 13.9499 6.01546 13.1627 5.99083C11.4835 5.81457 9.85552 6.99566 8.99981 6.99566C8.12754 6.99566 6.81004 6.00833 5.39131 6.03752C4.47364 6.06717 3.57929 6.33403 2.79541 6.81208C2.01154 7.29014 1.36486 7.9631 0.918393 8.76539C-1.01561 12.1138 0.426982 17.0349 2.27959 19.7415C3.20649 21.0668 4.28977 22.5473 5.70722 22.4948C7.09428 22.4372 7.61232 21.6103 9.28662 21.6103C10.9454 21.6103 11.4314 22.4948 12.8776 22.4614C14.366 22.4372 15.3038 21.1302 16.1981 19.7923C16.8641 18.8479 17.3766 17.8042 17.7166 16.6997C16.8518 16.334 16.1139 15.7218 15.5948 14.9395C15.0757 14.1572 14.7983 13.2394 14.7973 12.3006Z" fill="white" />
                                <path id="&#60;Path&#62;_2" d="M12.0656 4.21083C12.8772 3.23663 13.277 1.98445 13.1802 0.720215C11.9403 0.850435 10.7951 1.44299 9.97259 2.37982C9.57045 2.83749 9.26245 3.36993 9.0662 3.9467C8.86996 4.52347 8.78931 5.13326 8.82888 5.74121C9.44902 5.7476 10.0625 5.61319 10.6232 5.3481C11.1838 5.08301 11.6771 4.69416 12.0656 4.21083Z" fill="white" />
                            </g>
                        </svg>
                        <svg width="76" height="26" viewBox="0 0 76 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Text">
                                <g id="Vector">
                                    <path d="M8.33069 19.1397H3.59729L2.46057 22.4962H0.455688L4.93909 10.0782H7.02209L11.5055 22.4962H9.46642L8.33069 19.1397ZM4.08752 17.5909H7.83952L5.98991 12.1436H5.93815L4.08752 17.5909Z" fill="white" />
                                    <path d="M21.1881 17.9698C21.1881 20.7833 19.6823 22.5909 17.4098 22.5909C16.8341 22.621 16.2616 22.4884 15.7578 22.2082C15.254 21.9281 14.8393 21.5118 14.5612 21.0069H14.5182V25.4913H12.6598V13.4424H14.4586V14.9483H14.4928C14.7838 14.4458 15.2055 14.0316 15.7131 13.7498C16.2207 13.4679 16.7953 13.329 17.3756 13.3477C19.6734 13.3477 21.1881 15.1641 21.1881 17.9698ZM19.278 17.9698C19.278 16.1368 18.3307 14.9317 16.8854 14.9317C15.4654 14.9317 14.5104 16.1622 14.5104 17.9698C14.5104 19.794 15.4654 21.0157 16.8854 21.0157C18.3307 21.0157 19.278 19.8194 19.278 17.9698Z" fill="white" />
                                    <path d="M31.153 17.9698C31.153 20.7833 29.6471 22.5909 27.3746 22.5909C26.799 22.621 26.2265 22.4884 25.7227 22.2082C25.2189 21.9281 24.8042 21.5118 24.526 21.0069H24.483V25.4913H22.6246V13.4424H24.4234V14.9483H24.4576C24.7486 14.4458 25.1703 14.0316 25.6779 13.7498C26.1856 13.468 26.7601 13.329 27.3404 13.3477C29.6383 13.3477 31.153 15.1641 31.153 17.9698ZM29.2428 17.9698C29.2428 16.1368 28.2955 14.9317 26.8502 14.9317C25.4303 14.9317 24.4752 16.1622 24.4752 17.9698C24.4752 19.794 25.4303 21.0157 26.8502 21.0157C28.2955 21.0157 29.2428 19.8194 29.2428 17.9698Z" fill="white" />
                                    <path d="M37.7389 19.0362C37.8766 20.2676 39.0729 21.0762 40.7076 21.0762C42.2741 21.0762 43.401 20.2676 43.401 19.1572C43.401 18.1934 42.7213 17.6162 41.1119 17.2207L39.5026 16.833C37.2223 16.2822 36.1637 15.2158 36.1637 13.4854C36.1637 11.3428 38.0309 9.87109 40.6823 9.87109C43.3063 9.87109 45.1051 11.3428 45.1656 13.4854H43.2896C43.1773 12.2461 42.1529 11.4981 40.6559 11.4981C39.1588 11.4981 38.1344 12.2549 38.1344 13.3565C38.1344 14.2344 38.7887 14.751 40.3893 15.1465L41.7574 15.4824C44.3053 16.0849 45.3639 17.1084 45.3639 18.9248C45.3639 21.248 43.5133 22.7031 40.5699 22.7031C37.816 22.7031 35.9566 21.2822 35.8365 19.0361L37.7389 19.0362Z" fill="white" />
                                    <path d="M49.3746 11.2999V13.4424H51.0963V14.9141H49.3746V19.9053C49.3746 20.6807 49.7194 21.042 50.4762 21.042C50.6806 21.0385 50.8846 21.0241 51.0875 20.999V22.4619C50.7472 22.5255 50.4014 22.5543 50.0553 22.5479C48.2223 22.5479 47.5074 21.8594 47.5074 20.1035V14.9141H46.191V13.4424H47.5074V11.2999H49.3746Z" fill="white" />
                                    <path d="M52.0934 17.9698C52.0934 15.1212 53.7711 13.3311 56.3874 13.3311C59.0124 13.3311 60.6823 15.1211 60.6823 17.9698C60.6823 20.8262 59.0212 22.6085 56.3874 22.6085C53.7545 22.6085 52.0934 20.8262 52.0934 17.9698ZM58.7887 17.9698C58.7887 16.0157 57.8932 14.8624 56.3874 14.8624C54.8815 14.8624 53.987 16.0245 53.987 17.9698C53.987 19.9317 54.8815 21.0762 56.3874 21.0762C57.8932 21.0762 58.7887 19.9317 58.7887 17.9698Z" fill="white" />
                                    <path d="M62.2145 13.4424H63.9869V14.9834H64.0299C64.1499 14.5021 64.4318 14.0768 64.8284 13.7789C65.225 13.481 65.712 13.3288 66.2077 13.3477C66.4218 13.3469 66.6354 13.3702 66.8444 13.417V15.1553C66.574 15.0727 66.292 15.0348 66.0094 15.043C65.7394 15.0321 65.4703 15.0797 65.2204 15.1825C64.9706 15.2854 64.746 15.4412 64.562 15.6391C64.378 15.8369 64.239 16.0723 64.1546 16.329C64.0702 16.5856 64.0423 16.8575 64.0729 17.126V22.4961H62.2145L62.2145 13.4424Z" fill="white" />
                                    <path d="M75.4127 19.837C75.1627 21.4805 73.5621 22.6084 71.5143 22.6084C68.8805 22.6084 67.2457 20.8438 67.2457 18.0127C67.2457 15.1729 68.8893 13.3311 71.4362 13.3311C73.941 13.3311 75.5162 15.0518 75.5162 17.7969V18.4336H69.1217V18.5459C69.0922 18.8791 69.1339 19.2148 69.2441 19.5307C69.3543 19.8465 69.5304 20.1353 69.7607 20.3778C69.9911 20.6204 70.2704 20.8111 70.5802 20.9374C70.8899 21.0637 71.223 21.1227 71.5573 21.1104C71.9964 21.1515 72.4371 21.0498 72.8138 20.8204C73.1906 20.591 73.4831 20.246 73.6481 19.837L75.4127 19.837ZM69.1305 17.1348H73.6569C73.6735 16.8352 73.6281 16.5354 73.5234 16.2542C73.4188 15.973 73.2571 15.7165 73.0486 15.5007C72.84 15.2849 72.5892 15.1146 72.3117 15.0004C72.0342 14.8861 71.7361 14.8305 71.4362 14.837C71.1335 14.8352 70.8335 14.8933 70.5535 15.008C70.2734 15.1228 70.0189 15.2919 69.8045 15.5055C69.5902 15.7191 69.4203 15.9731 69.3046 16.2527C69.1889 16.5324 69.1297 16.8322 69.1305 17.1348Z" fill="white" />
                                </g>
                                <g id="Vector_2">
                                    <path d="M3.85461 0.731011C4.24422 0.703052 4.63519 0.761912 4.9993 0.903345C5.36341 1.04478 5.6916 1.26526 5.96018 1.54888C6.22877 1.83251 6.43106 2.17221 6.55246 2.54348C6.67386 2.91475 6.71135 3.30834 6.66223 3.69585C6.66223 5.6021 5.63196 6.69785 3.85461 6.69785H1.69934V0.731011H3.85461ZM2.62609 5.85401H3.75109C4.0295 5.87065 4.30811 5.82501 4.56665 5.72039C4.82519 5.61578 5.05715 5.45483 5.24564 5.24926C5.43413 5.0437 5.57441 4.79869 5.65628 4.53207C5.73814 4.26545 5.75952 3.98393 5.71886 3.70801C5.75657 3.43318 5.73302 3.15341 5.6499 2.88874C5.56678 2.62408 5.42615 2.38108 5.23809 2.17714C5.05003 1.97321 4.81918 1.81341 4.5621 1.70917C4.30502 1.60493 4.02807 1.55885 3.75109 1.57422H2.62609V5.85401Z" fill="white" />
                                    <path d="M7.7091 4.44435C7.68079 4.14843 7.71464 3.84986 7.80848 3.5678C7.90232 3.28573 8.05408 3.02638 8.25402 2.8064C8.45396 2.58642 8.69768 2.41065 8.96953 2.29038C9.24138 2.1701 9.53537 2.10797 9.83263 2.10797C10.1299 2.10797 10.4239 2.1701 10.6957 2.29038C10.9676 2.41065 11.2113 2.58642 11.4112 2.8064C11.6112 3.02638 11.7629 3.28573 11.8568 3.5678C11.9506 3.84986 11.9845 4.14843 11.9562 4.44435C11.985 4.74057 11.9516 5.03955 11.858 5.32208C11.7644 5.6046 11.6127 5.86442 11.4127 6.08484C11.2127 6.30525 10.9688 6.48139 10.6967 6.60192C10.4246 6.72245 10.1303 6.78472 9.83263 6.78472C9.53501 6.78472 9.24068 6.72245 8.96856 6.60192C8.69643 6.48139 8.45254 6.30525 8.25255 6.08484C8.05255 5.86442 7.90089 5.6046 7.80729 5.32208C7.7137 5.03955 7.68025 4.74057 7.7091 4.44435ZM11.0421 4.44435C11.0421 3.46828 10.6036 2.89748 9.8341 2.89748C9.06164 2.89748 8.6271 3.46828 8.6271 4.44436C8.6271 5.42825 9.06167 5.99465 9.8341 5.99465C10.6036 5.99464 11.0421 5.42433 11.0421 4.44435Z" fill="white" />
                                    <path d="M17.6017 6.69776H16.6798L15.7491 3.38135H15.6788L14.7521 6.69776H13.839L12.5978 2.19483H13.4991L14.3058 5.63083H14.3722L15.298 2.19483H16.1505L17.0763 5.63083H17.1466L17.9493 2.19483H18.838L17.6017 6.69776Z" fill="white" />
                                    <path d="M19.882 2.19483H20.7374V2.91016H20.8038C20.9165 2.65324 21.1065 2.43787 21.3474 2.29406C21.5882 2.15026 21.868 2.08518 22.1476 2.10791C22.3667 2.09144 22.5867 2.12447 22.7913 2.20457C22.9959 2.28467 23.1798 2.40977 23.3295 2.57061C23.4792 2.73146 23.5908 2.92392 23.656 3.13374C23.7212 3.34356 23.7383 3.56536 23.7062 3.78271V6.69771H22.8175V4.00587C22.8175 3.28224 22.5031 2.92237 21.8458 2.92237C21.6971 2.91544 21.5486 2.94076 21.4105 2.99659C21.2724 3.05242 21.1481 3.13744 21.046 3.24583C20.9438 3.35421 20.8664 3.4834 20.8188 3.62453C20.7713 3.76566 20.7549 3.9154 20.7706 4.06348V6.69776H19.882L19.882 2.19483Z" fill="white" />
                                    <path d="M25.1222 0.437012H26.0109V6.69775H25.1222V0.437012Z" fill="white" />
                                    <path d="M27.2462 4.44435C27.2179 4.14841 27.2518 3.84983 27.3457 3.56775C27.4395 3.28567 27.5913 3.02632 27.7913 2.80633C27.9912 2.58634 28.235 2.41057 28.5068 2.2903C28.7787 2.17002 29.0727 2.10789 29.37 2.10789C29.6673 2.10789 29.9613 2.17002 30.2332 2.2903C30.505 2.41057 30.7487 2.58634 30.9487 2.80633C31.1487 3.02632 31.3005 3.28567 31.3943 3.56775C31.4882 3.84983 31.5221 4.14841 31.4938 4.44435C31.5226 4.74059 31.4891 5.03957 31.3955 5.32209C31.3019 5.60462 31.1502 5.86443 30.9501 6.08484C30.7501 6.30525 30.5062 6.48137 30.2341 6.6019C29.962 6.72243 29.6676 6.7847 29.37 6.7847C29.0724 6.7847 28.778 6.72243 28.5059 6.6019C28.2337 6.48137 27.9898 6.30525 27.7898 6.08484C27.5898 5.86443 27.4381 5.60462 27.3445 5.32209C27.2509 5.03957 27.2174 4.74059 27.2462 4.44435ZM30.5792 4.44435C30.5792 3.46828 30.1407 2.89748 29.3712 2.89748C28.5987 2.89748 28.1642 3.46828 28.1642 4.44436C28.1642 5.42825 28.5988 5.99465 29.3712 5.99465C30.1407 5.99464 30.5792 5.42433 30.5792 4.44435Z" fill="white" />
                                    <path d="M32.4293 5.42433C32.4293 4.61378 33.0328 4.1465 34.1041 4.08009L35.3239 4.00978V3.62111C35.3239 3.14552 35.0094 2.87697 34.402 2.87697C33.9059 2.87697 33.5621 3.0591 33.4635 3.37746H32.6031C32.694 2.60402 33.4215 2.10793 34.443 2.10793C35.5719 2.10793 36.2086 2.66993 36.2086 3.62111V6.69777H35.3531V6.06496H35.2828C35.1401 6.29195 34.9397 6.477 34.7021 6.60121C34.4645 6.72542 34.1981 6.78435 33.9303 6.77196C33.7413 6.79162 33.5502 6.77146 33.3694 6.71276C33.1887 6.65406 33.0222 6.55813 32.8808 6.43116C32.7394 6.30419 32.6262 6.149 32.5484 5.97558C32.4706 5.80217 32.4301 5.61438 32.4293 5.42433ZM35.3239 5.03956V4.6631L34.2242 4.73341C33.6041 4.77491 33.3229 4.98585 33.3229 5.38282C33.3229 5.78809 33.6744 6.02393 34.1579 6.02393C34.2995 6.03827 34.4426 6.02397 34.5786 5.98188C34.7146 5.93979 34.8408 5.87077 34.9495 5.77893C35.0583 5.68709 35.1475 5.5743 35.2118 5.44728C35.2761 5.32026 35.3142 5.1816 35.3239 5.03956Z" fill="white" />
                                    <path d="M37.3766 4.44435C37.3766 3.0215 38.108 2.12013 39.2457 2.12013C39.5271 2.10716 39.8064 2.17457 40.051 2.31446C40.2955 2.45436 40.4951 2.66096 40.6266 2.91013H40.693V0.437012H41.5817V6.69775H40.7301V5.98632H40.6598C40.5182 6.23381 40.3116 6.43785 40.0623 6.57633C39.8131 6.71481 39.5307 6.78246 39.2457 6.77196C38.1002 6.77201 37.3766 5.87062 37.3766 4.44435ZM38.2946 4.44435C38.2946 5.39943 38.7448 5.97414 39.4977 5.97414C40.2467 5.97414 40.7096 5.39114 40.7096 4.44826C40.7096 3.50978 40.2419 2.91847 39.4977 2.91847C38.7496 2.91847 38.2946 3.49708 38.2946 4.44435Z" fill="white" />
                                    <path d="M45.2584 4.44435C45.2301 4.14843 45.264 3.84986 45.3578 3.5678C45.4516 3.28573 45.6034 3.02638 45.8033 2.8064C46.0033 2.58642 46.247 2.41065 46.5188 2.29038C46.7907 2.1701 47.0847 2.10797 47.382 2.10797C47.6792 2.10797 47.9732 2.1701 48.2451 2.29038C48.5169 2.41065 48.7606 2.58642 48.9606 2.8064C49.1605 3.02638 49.3123 3.28573 49.4061 3.5678C49.4999 3.84986 49.5338 4.14843 49.5055 4.44435C49.5343 4.74057 49.5009 5.03955 49.4073 5.32208C49.3137 5.6046 49.162 5.86442 48.962 6.08484C48.762 6.30525 48.5182 6.48139 48.246 6.60192C47.9739 6.72245 47.6796 6.78472 47.382 6.78472C47.0843 6.78472 46.79 6.72245 46.5179 6.60192C46.2457 6.48139 46.0019 6.30525 45.8019 6.08484C45.6019 5.86442 45.4502 5.6046 45.3566 5.32208C45.263 5.03955 45.2296 4.74057 45.2584 4.44435ZM48.5914 4.44435C48.5914 3.46828 48.1529 2.89748 47.3834 2.89748C46.611 2.89748 46.1764 3.46828 46.1764 4.44436C46.1764 5.42825 46.611 5.99465 47.3834 5.99465C48.153 5.99464 48.5914 5.42433 48.5914 4.44435Z" fill="white" />
                                    <path d="M50.6979 2.19483H51.5533V2.91016H51.6198C51.7324 2.65324 51.9224 2.43787 52.1633 2.29406C52.4041 2.15026 52.6839 2.08518 52.9635 2.10791C53.1826 2.09144 53.4026 2.12447 53.6072 2.20457C53.8118 2.28467 53.9957 2.40977 54.1454 2.57061C54.2951 2.73146 54.4067 2.92392 54.4719 3.13374C54.5371 3.34356 54.5542 3.56536 54.5221 3.78271V6.69771H53.6334V4.00587C53.6334 3.28224 53.319 2.92237 52.6617 2.92237C52.513 2.91544 52.3645 2.94076 52.2264 2.99659C52.0884 3.05242 51.964 3.13744 51.8619 3.24583C51.7598 3.35421 51.6823 3.4834 51.6348 3.62453C51.5872 3.76566 51.5708 3.9154 51.5865 4.06348V6.69776H50.6979V2.19483Z" fill="white" />
                                    <path d="M59.5436 1.07374V2.21534H60.5192V2.96388H59.5436V5.27931C59.5436 5.75099 59.7379 5.95753 60.1803 5.95753C60.2936 5.95717 60.4067 5.95032 60.5192 5.93702V6.67725C60.3596 6.7058 60.1979 6.72099 60.0358 6.72266C59.0475 6.72266 58.6539 6.375 58.6539 5.50684V2.96384H57.9391V2.2153H58.6539V1.07374H59.5436Z" fill="white" />
                                    <path d="M61.733 0.437012H62.6139V2.91846H62.6842C62.8023 2.65914 62.9976 2.44255 63.2432 2.2982C63.4889 2.15386 63.7732 2.08877 64.0572 2.11182C64.2752 2.09996 64.493 2.13635 64.6953 2.21839C64.8976 2.30043 65.0793 2.42611 65.2274 2.58644C65.3755 2.74678 65.4864 2.93783 65.5522 3.14597C65.618 3.3541 65.637 3.57419 65.608 3.79053V6.69776H64.7184V4.00976C64.7184 3.29052 64.3834 2.92626 63.7555 2.92626C63.6028 2.91374 63.4492 2.93473 63.3054 2.98779C63.1616 3.04084 63.0312 3.12467 62.9232 3.23341C62.8152 3.34214 62.7322 3.47316 62.6802 3.6173C62.6281 3.76144 62.6082 3.91521 62.6217 4.06786V6.69774H61.7331L61.733 0.437012Z" fill="white" />
                                    <path d="M70.7897 5.48194C70.6689 5.89348 70.4073 6.24946 70.0506 6.48761C69.694 6.72576 69.2649 6.83092 68.8385 6.78467C68.5418 6.7925 68.247 6.73568 67.9745 6.61815C67.702 6.50063 67.4584 6.3252 67.2604 6.10407C67.0625 5.88293 66.9151 5.62137 66.8284 5.33755C66.7417 5.05373 66.7178 4.75444 66.7584 4.46046C66.7189 4.16558 66.7432 3.86564 66.8297 3.58097C66.9162 3.2963 67.0628 3.03353 67.2597 2.81046C67.4566 2.58739 67.6991 2.40921 67.9708 2.28801C68.2425 2.1668 68.5371 2.10538 68.8346 2.10792C70.0875 2.10792 70.8434 2.96392 70.8434 4.37792V4.68801H67.6637V4.73781C67.6498 4.90306 67.6705 5.06939 67.7247 5.22614C67.7788 5.38289 67.8651 5.5266 67.978 5.64805C68.0909 5.76951 68.2279 5.86603 68.3803 5.93143C68.5327 5.99682 68.6971 6.02965 68.8629 6.02781C69.0755 6.05333 69.2908 6.01505 69.4816 5.91785C69.6724 5.82064 69.8299 5.6689 69.9342 5.48191L70.7897 5.48194ZM67.6637 4.03077H69.9381C69.9493 3.87964 69.9287 3.72784 69.8778 3.58513C69.8268 3.44241 69.7466 3.31193 69.6422 3.20207C69.5378 3.09221 69.4116 3.00541 69.2717 2.94723C69.1317 2.88906 68.9812 2.8608 68.8297 2.86427C68.676 2.86234 68.5235 2.8912 68.3811 2.94914C68.2387 3.00709 68.1094 3.09295 68.0007 3.20166C67.8921 3.31037 67.8063 3.43974 67.7484 3.58214C67.6905 3.72453 67.6617 3.87707 67.6637 4.03077Z" fill="white" />
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div className="flex space-x-[6.74px] pt-[8.44px] pb-[6.51px] pl-[18px] pr-[17.5px] border-2 border-current rounded-lg hover:cursor-pointer">
                        <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Google Play logo">
                                <path id="Vector" d="M1.43531 0.538054C1.10739 0.930126 0.941819 1.43275 0.972507 1.94295V24.0591C0.941729 24.5693 1.10731 25.0719 1.43531 25.464L1.50931 25.5361L13.8983 13.1472V12.8549L1.50931 0.465454L1.43531 0.538054Z" fill="url(#paint0_linear_95_931)" />
                                <path id="Vector_2" d="M18.0277 17.2786L13.8983 13.1472V12.8549L18.0287 8.72449L18.1218 8.77759L23.0146 11.5577C24.4122 12.3517 24.4122 13.6509 23.0146 14.4454L18.1218 17.2255L18.0277 17.2786Z" fill="url(#paint1_linear_95_931)" />
                                <path id="Vector_3" d="M18.1218 17.225L13.8983 13.0011L1.4353 25.464C1.72007 25.7152 2.08373 25.8588 2.46326 25.87C2.8428 25.8812 3.2143 25.7593 3.5134 25.5254L18.1218 17.225Z" fill="url(#paint2_linear_95_931)" />
                                <path id="Vector_4" d="M18.1218 8.77706L3.5134 0.476657C3.2143 0.242751 2.8428 0.120844 2.46326 0.132058C2.08373 0.143272 1.72007 0.286899 1.4353 0.538057L13.8983 13.0011L18.1218 8.77706Z" fill="url(#paint3_linear_95_931)" />
                                <path id="Vector_5" opacity="0.2" d="M18.0287 17.132L3.5134 25.3793C3.22582 25.5982 2.87482 25.7176 2.51339 25.7196C2.15196 25.7215 1.79971 25.6058 1.5098 25.39L1.4353 25.4645L1.5093 25.5366L1.5098 25.5361C1.79966 25.752 2.15193 25.8678 2.51339 25.8659C2.87485 25.8639 3.22587 25.7444 3.5134 25.5254L18.1218 17.225L18.0287 17.132Z" fill="black" />
                                <path id="Vector_6" opacity="0.12" d="M1.43528 25.3184C1.1074 24.9263 0.941831 24.4237 0.972484 23.9135V24.0596C0.941813 24.5698 1.10738 25.0724 1.43528 25.4645L1.50978 25.39L1.43528 25.3184Z" fill="black" />
                                <path id="Vector_7" opacity="0.12" d="M23.0146 14.2988L18.0287 17.132L18.1218 17.225L23.0146 14.4449C23.3024 14.32 23.5515 14.1202 23.7358 13.8663C23.9202 13.6125 24.0331 13.3138 24.0629 13.0015C24.001 13.2843 23.8741 13.5488 23.6921 13.774C23.5101 13.9992 23.2781 14.1789 23.0146 14.2988Z" fill="black" />
                                <path id="Vector_8" opacity="0.25" d="M3.51343 0.623221L23.0146 11.7032C23.2783 11.8231 23.5103 12.0028 23.6923 12.2281C23.8743 12.4534 24.0012 12.7181 24.0629 13.001C24.0334 12.6886 23.9205 12.3898 23.7362 12.1358C23.5518 11.8818 23.3026 11.682 23.0146 11.5571L3.51343 0.477121C2.11583 -0.316979 0.972534 0.342621 0.972534 1.94342V2.08952C0.972534 0.488821 2.11583 -0.170779 3.51343 0.623221Z" fill="white" />
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_95_931" x1="12.7996" y1="1.70976" x2="-3.98276" y2="18.4922" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#00A0FF" />
                                    <stop offset="0.00657" stopColor="#00A1FF" />
                                    <stop offset="0.2601" stopColor="#00BEFF" />
                                    <stop offset="0.5122" stopColor="#00D2FF" />
                                    <stop offset="0.7604" stopColor="#00DFFF" />
                                    <stop offset="1" stopColor="#00E3FF" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_95_931" x1="24.8343" y1="13.0015" x2="0.637397" y2="13.0015" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FFE000" />
                                    <stop offset="0.4087" stopColor="#FFBD00" />
                                    <stop offset="0.7754" stopColor="#FFA500" />
                                    <stop offset="1" stopColor="#FF9C00" />
                                </linearGradient>
                                <linearGradient id="paint2_linear_95_931" x1="15.8269" y1="15.2962" x2="-6.93143" y2="38.0545" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FF3A44" />
                                    <stop offset="1" stopColor="#C31162" />
                                </linearGradient>
                                <linearGradient id="paint3_linear_95_931" x1="-1.70277" y1="-6.82376" x2="8.45975" y2="3.33876" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#32A071" />
                                    <stop offset="0.0685" stopColor="#2DA771" />
                                    <stop offset="0.4762" stopColor="#15CF74" />
                                    <stop offset="0.8009" stopColor="#06E775" />
                                    <stop offset="1" stopColor="#00F076" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <svg width="85" height="29" viewBox="0 0 85 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Text">
                                <g id="Vector">
                                    <path d="M6.4184 4.24334C6.43657 4.61028 6.37988 4.97709 6.25177 5.32142C6.12365 5.66576 5.9268 5.98041 5.6732 6.24624C5.38898 6.541 5.04574 6.77244 4.66592 6.92541C4.2861 7.07838 3.87827 7.14944 3.4691 7.13394C3.05732 7.13763 2.64895 7.05896 2.26801 6.90257C1.88706 6.74618 1.54123 6.51521 1.25082 6.22325C0.960413 5.93129 0.731304 5.58422 0.576949 5.20245C0.422595 4.82067 0.346113 4.41189 0.352 4.00014C0.346159 3.58837 0.422668 3.17959 0.577033 2.79781C0.731398 2.41603 0.960502 2.06895 1.25089 1.77695C1.54128 1.48496 1.8871 1.25395 2.26803 1.09748C2.64895 0.941022 3.05731 0.862264 3.4691 0.865839C3.89248 0.86456 4.31162 0.950158 4.7006 1.11734C5.06186 1.26378 5.38342 1.49348 5.6391 1.78774L5.1117 2.31554C4.91072 2.07899 4.65809 1.89178 4.37329 1.76834C4.08849 1.64491 3.77913 1.58856 3.4691 1.60364C3.15702 1.60202 2.84782 1.66341 2.56003 1.78412C2.27223 1.90483 2.01176 2.08239 1.79421 2.30615C1.57666 2.52991 1.4065 2.79527 1.29394 3.08635C1.18137 3.37743 1.1287 3.68823 1.1391 4.00014C1.13166 4.46734 1.26312 4.92622 1.51682 5.3186C1.77052 5.71099 2.13503 6.01919 2.56412 6.20414C2.99322 6.38909 3.46757 6.44245 3.92703 6.35746C4.38649 6.27247 4.81036 6.05295 5.1449 5.72674C5.45279 5.39498 5.63126 4.96365 5.6478 4.51134H3.4691V3.79064H6.3764C6.40389 3.93998 6.41794 4.09149 6.4184 4.24334Z" fill="white" />
                                    <path d="M11.0277 1.73744H8.2953V3.63974H10.7592V4.36054H8.2953V6.26284H11.0277V7.00014H7.5248V1.00014H11.0277V1.73744Z" fill="white" />
                                    <path d="M14.2787 7.00014H13.5072V1.73744H11.8314V1.00014H15.9545V1.73744H14.2787V7.00014Z" fill="white" />
                                    <path d="M18.9379 7.00014V1.00014H19.7084V7.00014H18.9379Z" fill="white" />
                                    <path d="M23.1283 7.00014H22.3568V1.73744H20.6811V1.00014H24.8041V1.73744H23.1283V7.00014Z" fill="white" />
                                    <path d="M32.6093 6.22474C32.0253 6.80699 31.2343 7.13394 30.4096 7.13394C29.5849 7.13394 28.7939 6.80699 28.2099 6.22474C27.921 5.93211 27.6939 5.58438 27.542 5.20221C27.3902 4.82005 27.3168 4.41125 27.3261 4.00014C27.3168 3.58902 27.3902 3.18023 27.542 2.79807C27.6939 2.4159 27.921 2.06817 28.2099 1.77554C28.4986 1.48681 28.8413 1.25784 29.2186 1.10174C29.5958 0.94564 30.0002 0.865478 30.4085 0.86584C30.8167 0.866202 31.2209 0.947082 31.5979 1.10385C31.9749 1.26062 32.3173 1.49019 32.6054 1.77944C32.8945 2.0713 33.1221 2.41825 33.2746 2.79972C33.4271 3.18119 33.5014 3.5894 33.4931 4.00014C33.5022 4.41122 33.4286 4.81994 33.2768 5.20207C33.125 5.5842 32.898 5.93196 32.6093 6.22474ZM28.7792 5.72234C29.2117 6.15413 29.7979 6.39665 30.4091 6.39665C31.0203 6.39665 31.6065 6.15413 32.039 5.72234C32.2608 5.49526 32.4343 5.22557 32.5489 4.92956C32.6636 4.63355 32.717 4.31738 32.706 4.00014C32.717 3.6829 32.6636 3.36672 32.5489 3.07072C32.4343 2.77471 32.2608 2.50502 32.039 2.27794C31.6065 1.84615 31.0203 1.60363 30.4091 1.60363C29.7979 1.60363 29.2117 1.84615 28.7792 2.27794C28.5577 2.5052 28.3845 2.77495 28.2701 3.07092C28.1556 3.3669 28.1022 3.68299 28.1132 4.00014C28.1022 4.31729 28.1556 4.63338 28.2701 4.92935C28.3845 5.22533 28.5577 5.49508 28.7792 5.72234Z" fill="white" />
                                    <path d="M34.5751 7.00014V1.00014H35.5136L38.4296 5.66764H38.4628L38.4296 4.51134V1.00014H39.2011V7.00014H38.3964L35.3456 2.10654H35.3124L35.3456 3.26284V7.00014H34.5751Z" fill="white" />
                                    <path d="M6.4184 4.24334C6.43657 4.61028 6.37988 4.97709 6.25177 5.32142C6.12365 5.66576 5.9268 5.98041 5.6732 6.24624C5.38898 6.541 5.04574 6.77244 4.66592 6.92541C4.2861 7.07838 3.87827 7.14944 3.4691 7.13394C3.05732 7.13763 2.64895 7.05896 2.26801 6.90257C1.88706 6.74618 1.54123 6.51521 1.25082 6.22325C0.960413 5.93129 0.731304 5.58422 0.576949 5.20245C0.422595 4.82067 0.346113 4.41189 0.352 4.00014C0.346159 3.58837 0.422668 3.17959 0.577033 2.79781C0.731398 2.41603 0.960502 2.06895 1.25089 1.77695C1.54128 1.48496 1.8871 1.25395 2.26803 1.09748C2.64895 0.941022 3.05731 0.862264 3.4691 0.865839C3.89248 0.86456 4.31162 0.950158 4.7006 1.11734C5.06186 1.26378 5.38342 1.49348 5.6391 1.78774L5.1117 2.31554C4.91072 2.07899 4.65809 1.89178 4.37329 1.76834C4.08849 1.64491 3.77913 1.58856 3.4691 1.60364C3.15702 1.60202 2.84782 1.66341 2.56003 1.78412C2.27223 1.90483 2.01176 2.08239 1.79421 2.30615C1.57666 2.52991 1.4065 2.79527 1.29394 3.08635C1.18137 3.37743 1.1287 3.68823 1.1391 4.00014C1.13166 4.46734 1.26312 4.92622 1.51682 5.3186C1.77052 5.71099 2.13503 6.01919 2.56412 6.20414C2.99322 6.38909 3.46757 6.44245 3.92703 6.35746C4.38649 6.27247 4.81036 6.05295 5.1449 5.72674C5.45279 5.39498 5.63126 4.96365 5.6478 4.51134H3.4691V3.79064H6.3764C6.40389 3.93998 6.41794 4.09149 6.4184 4.24334Z" stroke="white" strokeWidth="0.2" strokeMiterlimit="10" />
                                    <path d="M11.0277 1.73744H8.2953V3.63974H10.7592V4.36054H8.2953V6.26284H11.0277V7.00014H7.5248V1.00014H11.0277V1.73744Z" stroke="white" strokeWidth="0.2" strokeMiterlimit="10" />
                                    <path d="M14.2787 7.00014H13.5072V1.73744H11.8314V1.00014H15.9545V1.73744H14.2787V7.00014Z" stroke="white" strokeWidth="0.2" strokeMiterlimit="10" />
                                    <path d="M18.9379 7.00014V1.00014H19.7084V7.00014H18.9379Z" stroke="white" strokeWidth="0.2" strokeMiterlimit="10" />
                                    <path d="M23.1283 7.00014H22.3568V1.73744H20.6811V1.00014H24.8041V1.73744H23.1283V7.00014Z" stroke="white" strokeWidth="0.2" strokeMiterlimit="10" />
                                    <path d="M32.6093 6.22474C32.0253 6.80699 31.2343 7.13394 30.4096 7.13394C29.5849 7.13394 28.7939 6.80699 28.2099 6.22474C27.921 5.93211 27.6939 5.58438 27.542 5.20221C27.3902 4.82005 27.3168 4.41125 27.3261 4.00014C27.3168 3.58902 27.3902 3.18023 27.542 2.79807C27.6939 2.4159 27.921 2.06817 28.2099 1.77554C28.4986 1.48681 28.8413 1.25784 29.2186 1.10174C29.5958 0.94564 30.0002 0.865478 30.4085 0.86584C30.8167 0.866202 31.2209 0.947082 31.5979 1.10385C31.9749 1.26062 32.3173 1.49019 32.6054 1.77944C32.8945 2.0713 33.1221 2.41825 33.2746 2.79972C33.4271 3.18119 33.5014 3.5894 33.4931 4.00014C33.5022 4.41122 33.4286 4.81994 33.2768 5.20207C33.125 5.5842 32.898 5.93196 32.6093 6.22474ZM28.7792 5.72234C29.2117 6.15413 29.7979 6.39665 30.4091 6.39665C31.0203 6.39665 31.6065 6.15413 32.039 5.72234C32.2608 5.49526 32.4343 5.22557 32.5489 4.92956C32.6636 4.63355 32.717 4.31738 32.706 4.00014C32.717 3.6829 32.6636 3.36672 32.5489 3.07072C32.4343 2.77471 32.2608 2.50502 32.039 2.27794C31.6065 1.84615 31.0203 1.60363 30.4091 1.60363C29.7979 1.60363 29.2117 1.84615 28.7792 2.27794C28.5577 2.5052 28.3845 2.77495 28.2701 3.07092C28.1556 3.3669 28.1022 3.68299 28.1132 4.00014C28.1022 4.31729 28.1556 4.63338 28.2701 4.92935C28.3845 5.22533 28.5577 5.49508 28.7792 5.72234Z" stroke="white" strokeWidth="0.2" strokeMiterlimit="10" />
                                    <path d="M34.5751 7.00014V1.00014H35.5136L38.4296 5.66764H38.4628L38.4296 4.51134V1.00014H39.2011V7.00014H38.3964L35.3456 2.10654H35.3124L35.3456 3.26284V7.00014H34.5751Z" stroke="white" strokeWidth="0.2" strokeMiterlimit="10" />
                                </g>
                                <path id="Vector_2" d="M27.1357 15.7517C26.2952 15.7549 25.4745 16.007 24.7772 16.4763C24.0799 16.9456 23.5373 17.611 23.2178 18.3884C22.8984 19.1659 22.8165 20.0205 22.9824 20.8445C23.1483 21.6685 23.5547 22.4248 24.1501 23.018C24.7456 23.6112 25.5035 24.0147 26.3281 24.1775C27.1527 24.3403 28.007 24.2551 28.7832 23.9327C29.5595 23.6103 30.2228 23.0652 30.6894 22.3661C31.156 21.667 31.4051 20.8453 31.405 20.0048C31.4133 19.4426 31.3084 18.8845 31.0966 18.3637C30.8847 17.8429 30.5703 17.37 30.172 16.9732C29.7737 16.5764 29.2996 16.2638 28.778 16.0539C28.2564 15.8441 27.6979 15.7413 27.1357 15.7517ZM27.1357 22.5825C26.6181 22.6194 26.1014 22.4996 25.6528 22.2387C25.2042 21.9778 24.8445 21.5879 24.6207 21.1198C24.3968 20.6516 24.319 20.1269 24.3975 19.6139C24.476 19.101 24.7071 18.6235 25.0608 18.2438C25.4144 17.864 25.8742 17.5995 26.3803 17.4847C26.8864 17.3699 27.4153 17.4101 27.8982 17.6001C28.3811 17.7902 28.7956 18.1212 29.0877 18.5501C29.3799 18.979 29.5361 19.4859 29.5361 20.0048C29.5519 20.3326 29.5018 20.6603 29.389 20.9685C29.2761 21.2767 29.1028 21.5593 28.8791 21.7994C28.6554 22.0396 28.386 22.2327 28.0866 22.3671C27.7872 22.5016 27.4639 22.5749 27.1357 22.5825ZM17.8223 15.7517C16.9818 15.7549 16.1611 16.007 15.4638 16.4763C14.7665 16.9455 14.2238 17.6109 13.9044 18.3884C13.5849 19.1658 13.503 20.0205 13.6689 20.8444C13.8348 21.6684 14.2411 22.4248 14.8366 23.018C15.4321 23.6112 16.1899 24.0147 17.0145 24.1775C17.8391 24.3403 18.6935 24.2551 19.4697 23.9327C20.246 23.6103 20.9093 23.0652 21.3759 22.3661C21.8425 21.667 22.0916 20.8453 22.0915 20.0048C22.0998 19.4426 21.9949 18.8845 21.7831 18.3637C21.5713 17.8429 21.2568 17.3701 20.8585 16.9733C20.4602 16.5765 19.9862 16.2638 19.4646 16.054C18.943 15.8441 18.3845 15.7413 17.8223 15.7517ZM17.8223 22.5825C17.3047 22.6194 16.788 22.4996 16.3394 22.2387C15.8908 21.9778 15.5311 21.5879 15.3073 21.1198C15.0834 20.6516 15.0056 20.1269 15.0841 19.6139C15.1626 19.101 15.3937 18.6235 15.7474 18.2438C16.101 17.864 16.5608 17.5995 17.0669 17.4847C17.573 17.3699 18.1019 17.4101 18.5848 17.6001C19.0677 17.7902 19.4822 18.1212 19.7743 18.5501C20.0665 18.979 20.2227 19.4859 20.2227 20.0048C20.2385 20.3326 20.1884 20.6603 20.0756 20.9685C19.9628 21.2767 19.7894 21.5593 19.5657 21.7995C19.342 22.0397 19.0726 22.2327 18.7732 22.3672C18.4738 22.5016 18.1505 22.5749 17.8223 22.5825ZM6.74355 17.0567V18.861H11.0612C10.9989 19.7073 10.6526 20.5078 10.0784 21.1326C9.64576 21.5736 9.12543 21.9191 8.55102 22.1466C7.9766 22.3741 7.36087 22.4787 6.74355 22.4536C5.48153 22.4365 4.27699 21.9232 3.39058 21.0247C2.50418 20.1262 2.00721 18.9148 2.00721 17.6527C2.00721 16.3906 2.50418 15.1792 3.39058 14.2807C4.27699 13.3822 5.48153 12.8689 6.74355 12.8518C7.95576 12.836 9.12526 13.2991 9.99795 14.1406L11.2706 12.8679C10.6752 12.2784 9.96806 11.8137 9.19068 11.5011C8.4133 11.1885 7.58133 11.0343 6.74355 11.0474C5.86803 11.0347 4.99872 11.1961 4.18616 11.5223C3.3736 11.8485 2.63399 12.3331 2.01036 12.9477C1.38672 13.5623 0.891496 14.2948 0.553474 15.1025C0.215453 15.9102 0.0413818 16.7771 0.0413818 17.6527C0.0413818 18.5283 0.215453 19.3952 0.553474 20.2029C0.891496 21.0106 1.38672 21.7431 2.01036 22.3577C2.63399 22.9724 3.3736 23.4569 4.18616 23.7831C4.99872 24.1093 5.86803 24.2708 6.74355 24.258C7.59901 24.2935 8.45223 24.1466 9.24661 23.8272C10.041 23.5078 10.7584 23.0231 11.3511 22.4053C12.4036 21.2566 12.9645 19.7415 12.9139 18.1844C12.9181 17.8063 12.8857 17.4286 12.8171 17.0567H6.74355ZM52.0518 18.4582C51.7962 17.6878 51.3097 17.0148 50.6583 16.5306C50.0069 16.0464 49.2222 15.7744 48.4108 15.7517C47.8644 15.7551 47.3243 15.8693 46.8232 16.0873C46.3221 16.3053 45.8704 16.6227 45.4955 17.0203C45.1205 17.4178 44.8301 17.8873 44.6417 18.4002C44.4533 18.9132 44.3709 19.4591 44.3994 20.0048C44.3871 20.564 44.4876 21.1199 44.695 21.6394C44.9024 22.1588 45.2123 22.6312 45.6063 23.0282C46.0002 23.4252 46.4702 23.7387 46.9881 23.95C47.5059 24.1613 48.0611 24.2661 48.6203 24.258C49.321 24.2619 50.0116 24.0917 50.6302 23.7627C51.2489 23.4337 51.7761 22.9562 52.1645 22.3731L50.7146 21.4065C50.4974 21.7672 50.1902 22.0653 49.823 22.2715C49.4559 22.4776 49.0414 22.5848 48.6203 22.5825C48.187 22.5991 47.7588 22.4851 47.391 22.2553C47.0233 22.0254 46.7331 21.6904 46.5581 21.2937L52.2452 18.9416L52.0518 18.4582ZM46.2521 19.876C46.2321 19.5664 46.274 19.256 46.3754 18.9628C46.4768 18.6697 46.6357 18.3997 46.8427 18.1687C47.0497 17.9376 47.3007 17.7502 47.581 17.6174C47.8614 17.4845 48.1654 17.4089 48.4753 17.395C48.7979 17.3738 49.1197 17.448 49.4005 17.6084C49.6813 17.7689 49.9086 18.0084 50.0541 18.2972L46.2521 19.876ZM41.6283 24.0002H43.4971V11.4986H41.6283V24.0002ZM38.5673 16.7022H38.5029C38.2188 16.3935 37.8721 16.149 37.4859 15.9851C37.0997 15.8212 36.683 15.7416 36.2635 15.7517C35.1669 15.7984 34.1306 16.2669 33.3711 17.0594C32.6116 17.8519 32.1876 18.9072 32.1876 20.0049C32.1876 21.1025 32.6116 22.1578 33.3711 22.9503C34.1306 23.7428 35.1669 24.2113 36.2635 24.258C36.6846 24.2692 37.1031 24.1885 37.4898 24.0216C37.8766 23.8547 38.2223 23.6055 38.5029 23.2914H38.5673V23.9036C38.5673 25.5308 37.6974 26.4007 36.2957 26.4007C35.8286 26.3895 35.3754 26.2395 34.9938 25.9698C34.6122 25.7001 34.3196 25.3229 34.1531 24.8863L32.5259 25.563C32.8326 26.3097 33.3553 26.9478 34.0269 27.3955C34.6985 27.8433 35.4886 28.0803 36.2957 28.0762C38.4868 28.0762 40.3395 26.7874 40.3395 23.6458V16.0094H38.5673V16.7022ZM36.4247 22.5825C35.7788 22.5277 35.177 22.2324 34.7384 21.7551C34.2998 21.2777 34.0564 20.6531 34.0564 20.0049C34.0564 19.3566 34.2998 18.732 34.7384 18.2546C35.177 17.7773 35.7788 17.482 36.4247 17.4272C36.7461 17.4429 37.061 17.5231 37.3507 17.6631C37.6404 17.8031 37.8989 18 38.1109 18.242C38.3229 18.4841 38.4839 18.7663 38.5845 19.0719C38.6851 19.3776 38.7231 19.7003 38.6962 20.0209C38.7214 20.3395 38.682 20.66 38.5804 20.963C38.4788 21.2661 38.3172 21.5455 38.1051 21.7847C37.8931 22.0238 37.635 22.2177 37.3462 22.3548C37.0575 22.4919 36.7441 22.5693 36.4247 22.5825ZM60.8057 11.4988H56.3345V24.0002H58.2002V19.2638H60.8057C61.3335 19.2927 61.8616 19.2138 62.3578 19.0317C62.854 18.8497 63.3079 18.5684 63.6917 18.205C64.0756 17.8417 64.3813 17.4038 64.5902 16.9184C64.7992 16.4329 64.9069 15.9099 64.9069 15.3813C64.9069 14.8528 64.7992 14.3298 64.5902 13.8443C64.3813 13.3588 64.0756 12.921 63.6917 12.5576C63.3079 12.1942 62.854 11.9129 62.3578 11.7309C61.8616 11.5488 61.3335 11.4699 60.8057 11.4988ZM60.8539 17.524H58.2002V13.2387H60.8539C61.1391 13.2328 61.4225 13.2839 61.6876 13.3889C61.9527 13.4939 62.1942 13.6508 62.398 13.8503C62.6017 14.0499 62.7636 14.2881 62.874 14.551C62.9845 14.8139 63.0415 15.0962 63.0415 15.3814C63.0415 15.6665 62.9845 15.9488 62.874 16.2117C62.7636 16.4746 62.6017 16.7128 62.398 16.9124C62.1942 17.1119 61.9527 17.2688 61.6876 17.3738C61.4225 17.4789 61.1391 17.5299 60.8539 17.524ZM72.3856 15.7287C71.7046 15.6889 71.0268 15.8489 70.4354 16.1889C69.844 16.5288 69.3647 17.0341 69.0563 17.6426L70.7129 18.3342C70.8772 18.0322 71.1259 17.7846 71.4287 17.6218C71.7315 17.4589 72.0752 17.3879 72.4177 17.4174C72.8911 17.3712 73.3634 17.5145 73.7312 17.816C74.0991 18.1175 74.3323 18.5525 74.3799 19.0257V19.1544C73.7808 18.8361 73.1123 18.6704 72.4338 18.6719C70.6486 18.6719 68.8312 19.653 68.8312 21.4865C68.8486 21.8729 68.9434 22.2519 69.11 22.601C69.2766 22.9501 69.5116 23.2621 69.8011 23.5186C70.0906 23.7751 70.4287 23.9709 70.7953 24.0942C71.1619 24.2176 71.5496 24.266 71.9352 24.2367C72.4051 24.2644 72.8737 24.1656 73.2923 23.9506C73.711 23.7356 74.0644 23.4123 74.3156 23.0144H74.3799V23.9794H76.1812V19.1866C76.1812 16.9671 74.5246 15.7287 72.3856 15.7287ZM72.1604 22.5801C71.5492 22.5801 70.6968 22.2746 70.6968 21.5186C70.6968 20.5537 71.7583 20.1837 72.6751 20.1837C73.2706 20.1678 73.8594 20.3123 74.3799 20.6019C74.3114 21.1441 74.0489 21.6432 73.6409 22.0069C73.2328 22.3705 72.707 22.5742 72.1604 22.5801ZM82.7432 16.0021L80.6041 21.4221H80.5397L78.3203 16.0021H76.3099L79.6391 23.5773L77.7413 27.7911H79.6873L84.8179 16.0021H82.7432ZM65.9362 24.0002H67.8018V11.4988H65.9362V24.0002Z" fill="white" />
                            </g>
                        </svg>
                    </div>

                </div>

            </div>

        </>
    )
}