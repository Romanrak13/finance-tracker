import Button from "@mui/material/Button";


// app/(dashboard)/page.tsx
export default function DashboardPage() {
  return (
    <div>
         <Button variant="contained">MUI Works!</Button>
      <h1 className="text-2xl font-semibold mb-2">Dashboard</h1>
      <p className="text-slate-400 text-sm">
        Тут пізніше будуть графіки витрат, підписок та AI-інсайти.
      </p>
    </div>
  );
}
