"use client";
import { BarChart3, ShoppingBag, Users, Clock, Activity } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

type ChartPoint = { label: string; value: number };

const ordersByHour: ChartPoint[] = [
  { label: "10:00", value: 25 },
  { label: "11:00", value: 40 },
  { label: "12:00", value: 80 },
  { label: "13:00", value: 65 },
  { label: "14:00", value: 50 },
  { label: "15:00", value: 35 },
];

const revenueTrend: ChartPoint[] = [
  { label: "Mon", value: 40 },
  { label: "Tue", value: 55 },
  { label: "Wed", value: 60 },
  { label: "Thu", value: 48 },
  { label: "Fri", value: 82 },
  { label: "Sat", value: 95 },
  { label: "Sun", value: 70 },
];

export default function StatisticsPage() {
  const { t } = useTranslation("admin");
  const router = useRouter();

  return (
    <div className="p-4 md:p-6 mx-auto space-y-6">
      {/* PAGE TITLE */}
      <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
        <div>
          <h1 className="text-2xl md:text-3xl underline font-extrabold">
            {t("stats.title")}
          </h1>
          <p className="text-sm text-gray-500">{t("stats.subtitle")}</p>
        </div>

        <div className="text-xs text-gray-500">
          <button
            className="btn btn-sm mb-2 items-center justify-center bg-[#3B82F6] text-white hover:bg-[#0851c7]"
            onClick={() => router.push("/admin/create")}
          >
            {t("stats.createMenu")}
          </button>
          <p>{t("stats.period")}</p>
        </div>
      </header>

      {/* SECTION 1: SALES DASHBOARD */}
      <section className="bg-white rounded-2xl shadow border overflow-hidden">
        <div className="bg-blue-600 text-white px-4 py-2 text-sm font-semibold flex items-center justify-between">
          <span>{t("stats.section.salesDashboard")}</span>
          <span className="text-[11px] opacity-90">
            {t("stats.section.dailyView")}
          </span>
        </div>

        <div className="p-4 space-y-4">
          {/* top row: cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <div className="rounded-xl border bg-slate-50 p-3 flex flex-col gap-1">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{t("stats.salesTotal")}</span>
                <ShoppingBag className="w-4 h-4 text-indigo-500" />
              </div>
              <p className="text-2xl font-bold text-gray-800">¥127,850</p>
              <p className="text-xs text-emerald-600">
                +6.0% {t("stats.vsYesterday")}
              </p>
            </div>

            <div className="rounded-xl border bg-slate-50 p-3 flex flex-col gap-1">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{t("stats.salesCount")}</span>
                <BarChart3 className="w-4 h-4 text-green-500" />
              </div>
              <p className="text-2xl font-bold text-gray-800">342</p>
              <p className="text-xs text-emerald-600">
                +3.2% {t("stats.vsYesterday")}
              </p>
            </div>

            <div className="rounded-xl border bg-slate-50 p-3 flex flex-col gap-1">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{t("stats.avgCheck")}</span>
                <Users className="w-4 h-4 text-amber-500" />
              </div>
              <p className="text-2xl font-bold text-gray-800">¥374</p>
              <p className="text-xs text-gray-500">{t("stats.perCustomer")}</p>
            </div>

            <div className="rounded-xl border bg-slate-50 p-3 flex flex-col gap-1">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{t("stats.turnover")}</span>
                <Clock className="w-4 h-4 text-sky-500" />
              </div>
              <p className="text-2xl font-bold text-gray-800">2.8</p>
              <p className="text-xs text-gray-500">{t("stats.turnoverNote")}</p>
            </div>
          </div>

          {/* middle row: bar chart + small side list */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* bar chart */}
            <div className="md:col-span-2 rounded-2xl border bg-slate-50 p-4">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-sm font-semibold text-gray-700">
                  {t("stats.ordersByHour")}
                </h2>
                <span className="text-[11px] text-gray-500">
                  {t("stats.chartLegend")}
                </span>
              </div>

              <div className="h-44 flex flex-col justify-between">
                <div className="flex-1 flex items-end gap-3 border border-dashed border-slate-300 rounded-xl px-4 py-3 bg-white">
                  {ordersByHour.map((p) => (
                    <div
                      key={p.label}
                      className="flex-1 flex flex-col-reverse items-center gap-1"
                    >
                      <div className="w-6 md:w-8 bg-indigo-100 rounded-t-lg overflow-hidden">
                        <div
                          className="w-full bg-indigo-500 rounded-t-lg"
                          style={{ height: `${p.value}%` }}
                        />
                      </div>
                      <span className="text-[10px] text-gray-500">
                        {p.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* side mini-metrics */}
            <div className="space-y-3">
              <div className="rounded-xl border bg-slate-50 p-3">
                <p className="text-xs text-gray-500 mb-1">
                  {t("stats.channelBreakdown")}
                </p>
                <ul className="space-y-1 text-xs">
                  <li className="flex justify-between">
                    <span>{t("stats.qr")}</span>
                    <span className="font-semibold">68%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>{t("stats.staffEntry")}</span>
                    <span className="font-semibold">22%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>{t("stats.takeout")}</span>
                    <span className="font-semibold">10%</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border bg-slate-50 p-3">
                <p className="text-xs text-gray-500 mb-1">
                  {t("stats.alerts")}
                </p>
                <ul className="space-y-1 text-xs">
                  <li className="flex justify-between">
                    <span className="badge badge-warning badge-xs" />
                    <span>{t("stats.slow")}</span>
                    <span className="font-semibold text-amber-600">3</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="badge badge-error badge-xs" />
                    <span>{t("stats.payRetry")}</span>
                    <span className="font-semibold text-red-500">1</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="badge badge-success badge-xs" />
                    <span>{t("stats.noAlert")}</span>
                    <span className="font-semibold text-emerald-600">0</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: MENU & PRODUCT ANALYSIS */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* left - menu performance */}
        <div className="bg-white rounded-2xl shadow border overflow-hidden">
          <div className="bg-slate-800 text-white px-4 py-2 text-sm font-semibold flex justify-between">
            <span>{t("stats.section.menuAnalysis")}</span>
            <span className="text-[11px] opacity-80">
              {t("stats.section.byQuantity")}
            </span>
          </div>

          <div className="p-4 space-y-3">
            <div className="flex flex-wrap gap-3 text-xs">
              <span className="badge badge-primary">
                {t("stats.filter.hotItems")}
              </span>
              <span className="badge badge-secondary">
                {t("stats.filter.lowStock")}
              </span>
              <span className="badge badge-ghost">
                {t("stats.filter.allItems")}
              </span>
            </div>

            <div className="overflow-x-auto text-xs">
              <table className="table table-xs">
                <thead>
                  <tr>
                    <th>{t("stats.col.product")}</th>
                    <th>{t("stats.col.category")}</th>
                    <th>{t("stats.col.qty")}</th>
                    <th>{t("stats.col.sales")}</th>
                    <th>{t("stats.col.profit")}</th>
                    <th>{t("stats.col.status")}</th>
                  </tr>
                </thead>

                {/* Rows */}
                <tbody>
                  <tr>
                    <td>{t("stats.rows.1.name")}</td>
                    <td>{t("stats.rows.1.category")}</td>
                    <td>{t("stats.rows.1.sold")}</td>
                    <td>{t("stats.rows.1.revenue")}</td>
                    <td>{t("stats.rows.1.growth")}</td>
                    <td>
                      <span className="badge badge-success badge-xs">
                        {t("stats.rows.1.status")}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>{t("stats.rows.2.name")}</td>
                    <td>{t("stats.rows.2.category")}</td>
                    <td>{t("stats.rows.2.sold")}</td>
                    <td>{t("stats.rows.2.revenue")}</td>
                    <td>{t("stats.rows.2.growth")}</td>
                    <td>
                      <span className="badge badge-success badge-xs">
                        {t("stats.rows.2.status")}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>{t("stats.rows.3.name")}</td>
                    <td>{t("stats.rows.3.category")}</td>
                    <td>{t("stats.rows.3.sold")}</td>
                    <td>{t("stats.rows.3.revenue")}</td>
                    <td>{t("stats.rows.3.growth")}</td>
                    <td>
                      <span className="badge badge-success badge-xs">
                        {t("stats.rows.3.status")}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>{t("stats.rows.4.name")}</td>
                    <td>{t("stats.rows.4.category")}</td>
                    <td>{t("stats.rows.4.sold")}</td>
                    <td>{t("stats.rows.4.revenue")}</td>
                    <td>{t("stats.rows.4.growth")}</td>
                    <td>
                      <span className="badge badge-success badge-xs">
                        {t("stats.rows.4.status")}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* right - revenue trend */}
        <div className="bg-white rounded-2xl shadow border overflow-hidden">
          <div className="bg-purple-600 text-white px-4 py-2 text-sm font-semibold flex justify-between">
            <span>{t("stats.section.revenueTrend")}</span>
            <span className="text-[11px] opacity-80">
              {t("stats.section.weeklyView")}
            </span>
          </div>

          <div className="p-4 space-y-3">
            <div className="flex flex-wrap gap-3 text-xs">
              <span className="badge badge-ghost">
                {t("stats.metric.totalRevenue")}
              </span>
              <span className="badge badge-ghost">
                {t("stats.metric.avgPerDay")}
              </span>
            </div>

            <div className="h-48 flex flex-col justify-between">
              <div className="flex-1 border border-dashed border-slate-300 rounded-xl px-4 py-3 bg-slate-50">
                {/* fake line chart */}
                <div className="relative h-full w-full">
                  {/* baseline */}
                  <div className="absolute inset-x-0 bottom-6 h-px bg-slate-300/70" />
                  {/* dots + lines (super fake) */}
                  <div className="absolute inset-4 flex items-end justify-between">
                    {revenueTrend.map((p, idx) => (
                      <div
                        key={p.label}
                        className="flex flex-col items-center justify-end gap-1"
                      >
                        <div className="relative">
                          {/* vertical bar as “line” segment */}
                          <div className="w-[3px] bg-sky-400 rounded-full h-16 opacity-60" />
                          <div className="w-3 h-3 rounded-full bg-sky-500 border border-white shadow -mt-8 mx-auto" />
                        </div>
                        <span className="text-[10px] text-gray-500">
                          {p.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>{t("stats.trendLabel")}</span>
                <span>{t("stats.sampleDataLabel")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SYSTEM STATUS / SLA */}
      <section className="bg-white rounded-2xl shadow border overflow-hidden">
        <div className="bg-red-500 text-white px-4 py-2 text-sm font-semibold flex justify-between">
          <span>{t("stats.section.systemStatus")}</span>
          <span className="text-[11px] opacity-80">
            {t("stats.section.systemHealth")}
          </span>
        </div>

        <div className="p-4 space-y-4">
          {/* status summary */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-xs">
            <div className="rounded-xl border bg-emerald-50 p-3">
              <p className="font-semibold text-emerald-700 flex items-center gap-1">
                <Activity className="w-4 h-4" />
                {t("stats.system.overall")}
              </p>
              <p className="mt-1 text-lg font-bold text-emerald-800">
                {t("stats.system.normal")}
              </p>
              <p className="text-[11px] text-emerald-700">
                {t("stats.system.normalDesc")}
              </p>
            </div>

            <div className="rounded-xl border bg-slate-50 p-3">
              <p className="text-[11px] text-gray-500">
                {t("stats.system.activeSessions")}
              </p>
              <p className="text-xl font-bold">47</p>
            </div>

            <div className="rounded-xl border bg-slate-50 p-3">
              <p className="text-[11px] text-gray-500">
                {t("stats.system.requests")}
              </p>
              <p className="text-xl font-bold">1,283</p>
            </div>

            <div className="rounded-xl border bg-slate-50 p-3">
              <p className="text-[11px] text-gray-500">
                {t("stats.system.errorRate")}
              </p>
              <p className="text-xl font-bold text-emerald-700">0.03%</p>
            </div>

            <div className="rounded-xl border bg-slate-50 p-3">
              <p className="text-[11px] text-gray-500">
                {t("stats.system.slaBreaches")}
              </p>
              <p className="text-xl font-bold text-emerald-700">0</p>
            </div>
          </div>

          {/* SLA bars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="rounded-xl border bg-slate-50 p-3 space-y-2">
              <p className="font-semibold text-gray-700">
                {t("stats.sla.uptime")}
              </p>
              <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                <div className="bg-emerald-500 h-3 w-[99%]" />
              </div>
              <div className="flex justify-between text-[11px] text-gray-600">
                <span>99.97%</span>
                <span>{t("stats.sla.target")}</span>
              </div>
            </div>

            <div className="rounded-xl border bg-slate-50 p-3 space-y-2">
              <p className="font-semibold text-gray-700">
                {t("stats.sla.latency")}
              </p>
              <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                <div className="bg-amber-400 h-3 w-[45%]" />
              </div>
              <div className="flex justify-between text-[11px] text-gray-600">
                <span>42 ms</span>
                <span>{t("stats.sla.latencyTarget")}</span>
              </div>
            </div>

            <div className="rounded-xl border bg-slate-50 p-3 space-y-2">
              <p className="font-semibold text-gray-700">
                {t("stats.sla.api")}
              </p>
              <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                <div className="bg-emerald-500 h-3 w-[99%]" />
              </div>
              <div className="flex justify-between text-[11px] text-gray-600">
                <span>99.94%</span>
                <span>{t("stats.sla.apiTarget")}</span>
              </div>
            </div>
          </div>

          {/* footer buttons */}
          <div className="flex flex-wrap gap-2 justify-end text-xs">
            <button className="btn btn-xs bg-slate-100 border-none text-gray-700">
              {t("stats.actions.viewLogs")}
            </button>
            <button className="btn btn-xs bg-slate-100 border-none text-gray-700">
              {t("stats.actions.alertSettings")}
            </button>
            <button className="btn btn-xs bg-rose-500 text-white border-none">
              {t("stats.actions.maintenance")}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
