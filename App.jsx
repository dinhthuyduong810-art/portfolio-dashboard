export default function PortfolioDashboard() {
  const kpis = [
    { value: '10+', label: 'Năm kinh nghiệm' },
    { value: '3', label: 'Nhà mạng lớn' },
    { value: '10+', label: 'Dịch vụ VAS - Vallue Added Service' },
    { value: '<24h', label: 'Xử lý sự cố' },
  ];

  const timeline = [
    {
      year: '08.2015 – 08.2021',
      title: 'Vận hành nội dung VAS – VMG',
      desc: ['Vận hành hơn 10 dịch vụ VAS', 'Đảm bảo uptime hệ thống >99%'],
    },
    {
      year: '08.2021 – 04.2025',
      title: 'Điều phối dự án VAS – VMG',
      desc: ['Kiểm soát doanh thu & dữ liệu', 'Phối hợp kiểm thử UAT'],
    },
    {
      year: '06.2025 – 12.2025',
      title: 'Vận hành nền tảng HiPlay',
      desc: ['Đồng bộ dữ liệu nội dung hệ thống', 'Xử lý sai lệch dữ liệu'],
    },
    {
      year: '01.2026 – Nay',
      title: 'Content Marketing – Maisun Agency',
      desc: ['Quản lý KOL/KOC', 'Triển khai kế hoạch nội dung số'],
    },
  ];

  const skills = [
    { name: 'Excel / Word / Google Sheets / Doc', value: 90 },
    { name: 'Vận hành hệ thống', value: 85 },
    { name: 'Power BI', value: 80 },
    { name: 'Mindmap', value: 75 },
    { name: 'Canva / Capcut', value: 75 },
    { name: 'Chat GPT / Gemini', value: 75 },
    { name: 'Shopifi / Shopbase / Wordpres / Amazone', value: 75 },
  ];

  const strengths = [
    'Vận hành dịch vụ VAS',
    'Kiểm soát dữ liệu',
    'Điều phối dự án',
    'Kiểm thử hệ thống',
  ];

  return (
    <div className="min-h-screen bg-[#FFF7F8] p-6 lg:p-10 text-[#1F2937] font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="bg-white rounded-[36px] shadow-sm border border-[#FAD4DC] overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-[#FFF1F4] rounded-full blur-3xl opacity-80" />

          <div className="relative px-8 lg:px-12 py-12">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FFF1F4] border border-[#FAD4DC] text-[#E94B6A] text-sm font-semibold mb-6 shadow-sm">
                🌸 Portfolio cá nhân
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-[#E94B6A] tracking-tight leading-tight">
                ĐINH THUỲ DƯƠNG
              </h1>

              <p className="mt-5 text-2xl lg:text-3xl font-semibold text-[#374151] leading-relaxed">
                CHUYÊN VIÊN VẬN HÀNH DỊCH VỤ VAS
              </p>

              <p className="mt-4 text-lg text-[#6B7280] leading-relaxed">
                Kiểm soát dữ liệu • Ổn định hệ thống • Điều phối dự án
              </p>

              <p className="mt-8 text-[#6B7280] leading-8 text-[16px] max-w-3xl">
                Hơn 10 năm kinh nghiệm vận hành dịch vụ VAS trên hệ thống nhà mạng.
                Tập trung vào kiểm soát dữ liệu, xử lý sự cố và đảm bảo hệ thống hoạt động ổn định,
                phối hợp hiệu quả với các bộ phận kỹ thuật và vận hành.
              </p>
            </div>
          </div>
        </div>

        {/* KPI */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[28px] shadow-sm border border-[#FAD4DC] p-8"
            >
              <div className="text-5xl font-bold text-[#E94B6A] tracking-tight">
                {item.value}
              </div>

              <div className="mt-4 text-[#6B7280] leading-6 text-sm">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Flow */}
        <div className="bg-white rounded-[36px] p-8 lg:p-10 shadow-sm border border-[#FAD4DC]">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-10">
            <h2 className="text-3xl font-bold text-[#E94B6A]">
              Luồng vận hành
            </h2>

            <div className="text-sm text-[#6B7280] bg-[#FFF5F7] px-5 py-2 rounded-full border border-[#FAD4DC]">
              Quy trình xử lý dữ liệu & sự cố hệ thống
            </div>
          </div>

          <div className="flex items-center justify-between gap-5 overflow-x-auto pb-2">
            {['Dữ liệu', 'Giám sát', 'Phát hiện', 'Xử lý', 'Ổn định'].map((step, idx) => (
              <div key={idx} className="flex items-center gap-5 min-w-fit">
                <div
                  className={`px-8 py-5 rounded-full text-white font-semibold whitespace-nowrap shadow-sm text-lg ${
                    idx === 4 ? 'bg-[#E94B6A]' : 'bg-[#F4A6B5]'
                  }`}
                >
                  {step}
                </div>

                {idx !== 4 && (
                  <div className="text-3xl text-[#E94B6A] font-bold">→</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-[36px] p-8 lg:p-10 shadow-sm border border-[#FAD4DC]">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold text-[#E94B6A]">
                Kinh nghiệm làm việc
              </h2>

              <div className="text-sm text-[#6B7280] bg-[#FFF5F7] px-4 py-2 rounded-full border border-[#FAD4DC]">
                2015 → Nay
              </div>
            </div>

            <div className="space-y-12 border-l-4 border-[#F4A6B5] pl-10">
              {timeline.map((item, idx) => (
                <div key={idx} className="relative">
                  <div
                    className={`absolute -left-[53px] top-1 w-6 h-6 rounded-full border-4 border-white shadow-md ${
                      idx === timeline.length - 1 ? 'bg-[#E94B6A]' : 'bg-[#F4A6B5]'
                    }`}
                  />

                  <p className="text-sm text-[#E94B6A] font-semibold uppercase tracking-wide">
                    {item.year}
                  </p>

                  <h3 className="text-2xl font-bold mt-3 text-[#1F2937] leading-relaxed">
                    {item.title}
                  </h3>

                  <ul className="mt-5 space-y-3 text-[#6B7280] leading-7 text-[15px]">
                    {item.desc.map((d, i) => (
                      <li key={i}>• {d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-[36px] p-8 shadow-sm border border-[#FAD4DC]">
              <h2 className="text-2xl font-bold text-[#E94B6A] mb-7">
                Trách nhiệm chính
              </h2>

              <ul className="space-y-5 text-[#6B7280] leading-8 text-[15px]">
                <li>• Đối soát và kiểm soát dữ liệu dịch vụ</li>
                <li>• Giám sát SLA & xử lý sự cố hệ thống</li>
                <li>• Kiểm thử và triển khai hệ thống (UAT)</li>
                <li>• Phối hợp liên phòng ban & kỹ thuật</li>
              </ul>
            </div>

            <div className="bg-[#FFF1F4] rounded-[36px] p-8 border border-[#F8C9D4] shadow-sm">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-[#E94B6A] text-sm font-semibold border border-[#FAD4DC] mb-7 shadow-sm">
                ✨ Case Study
              </div>

              <h3 className="text-2xl font-bold text-[#1F2937] leading-relaxed mb-8">
                Sai lệch dữ liệu doanh thu VAS
              </h3>

              <div className="space-y-6 text-[15px] leading-8">
                <div>
                  <p className="font-semibold text-[#1F2937] mb-1">Vấn đề</p>
                  <p className="text-[#6B7280]">
                    Dữ liệu giữa hệ thống và báo cáo lệch khoảng 5%
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-[#1F2937] mb-1">Xử lý</p>
                  <p className="text-[#6B7280]">
                    Kiểm tra log, đối soát dữ liệu và phối hợp với team kỹ thuật
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-[#1F2937] mb-1">Kết quả</p>
                  <p className="text-[#6B7280]">
                    Xử lý trong 24 giờ, khôi phục độ chính xác dữ liệu 100%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-[36px] p-8 lg:p-10 shadow-sm border border-[#FAD4DC]">
            <h2 className="text-3xl font-bold text-[#E94B6A] mb-10">
              Kỹ năng
            </h2>

            <div className="space-y-8">
              {skills.map((skill, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-3 text-sm">
                    <span className="font-medium text-[#374151] text-[15px]">
                      {skill.name}
                    </span>

                    <span className="font-semibold text-[#E94B6A]">
                      {skill.value}%
                    </span>
                  </div>

                  <div className="w-full bg-[#FCE7F3] rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-[#F4A6B5] h-3 rounded-full"
                      style={{ width: `${skill.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[36px] p-8 lg:p-10 shadow-sm border border-[#FAD4DC]">
            <h2 className="text-3xl font-bold text-[#E94B6A] mb-10">
              Thế mạnh cốt lõi
            </h2>

            <div className="grid grid-cols-2 gap-5">
              {strengths.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#FFF5F7] rounded-[28px] p-7 border border-[#FAD4DC] text-center font-medium text-[#374151] shadow-sm leading-7"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[36px] border border-[#FAD4DC] p-7 text-center text-sm text-[#6B7280] shadow-sm leading-8">
          📧 dinhthuyduong810@gmail.com | 📞 0985 175 829 | 🌐 thuyduong.net
        </div>
      </div>
    </div>
  );
}
