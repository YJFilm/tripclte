
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function TripExpenseForm() {
  const [form, setForm] = useState({
    name: "",
    amount: "",
    category: "",
    members: ["영준", "현민", "성훈"],
    involved: ["영준", "현민", "성훈"],
    note: "",
  });

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = () => {
    console.log("제출된 데이터:", form);
    alert("지출 내역이 제출되었습니다!");
    setForm({ ...form, amount: "", category: "", note: "" });
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <Card className="shadow-xl">
        <CardContent className="space-y-4 pt-6">
          <h2 className="text-xl font-bold text-center">지출 입력하기</h2>

          <Select onValueChange={(v) => handleChange("name", v)}>
            <SelectItem value="" disabled>이름 선택</SelectItem>
            {form.members.map((m) => (
              <SelectItem key={m} value={m}>{m}</SelectItem>
            ))}
          </Select>

          <Input
            type="number"
            placeholder="금액 (원)"
            value={form.amount}
            onChange={(e) => handleChange("amount", e.target.value)}
          />

          <Select onValueChange={(v) => handleChange("category", v)}>
            <SelectItem value="" disabled>지출 항목 선택</SelectItem>
            {['숙소', '식비', '교통', '입장료', '기타'].map((c) => (
              <SelectItem key={c} value={c}>{c}</SelectItem>
            ))}
          </Select>

          <Textarea
            placeholder="간단한 메모 (선택)"
            value={form.note}
            onChange={(e) => handleChange("note", e.target.value)}
          />

          <Button className="w-full" onClick={handleSubmit}>
            제출하기
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
