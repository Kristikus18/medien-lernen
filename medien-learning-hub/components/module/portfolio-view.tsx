"use client";

import { useCallback, useEffect, useState } from "react";
import { doc, onSnapshot, serverTimestamp, setDoc } from "firebase/firestore";
import { AutosaveTextarea } from "@/components/shared/autosave-textarea";
import { Badge, PageHeader, Panel, ProgressBar } from "@/components/shared/ui";
import { useAuth } from "@/lib/auth";
import { getFirebaseDb } from "@/lib/firebase";

const caseSteps = [
  "Problem",
  "Research",
  "Moodboard",
  "Sketches",
  "Design Process",
  "Final Result",
  "Mockups"
];

const skills = [
  "Illustrator",
  "Photoshop",
  "InDesign",
  "WordPress",
  "German",
  "English",
  "Typography",
  "Color Theory",
  "Client Communication",
  "Portfolio",
  "Time Management"
];

export function PortfolioView() {
  const { user } = useAuth();
  const userId = user?.uid ?? "";
  const [ratings, setRatings] = useState<Record<string, number>>({});

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(getFirebaseDb(), "users", userId, "selfAssessments", "current"), (snapshot) => {
      const data = snapshot.data();
      if (data?.ratings && typeof data.ratings === "object") {
        setRatings(data.ratings as Record<string, number>);
      }
    });
    return unsubscribe;
  }, [userId]);

  const saveRatings = useCallback(
    async (nextRatings: Record<string, number>) => {
      setRatings(nextRatings);
      await setDoc(
        doc(getFirebaseDb(), "users", userId, "selfAssessments", "current"),
        {
          id: "current",
          ratings: nextRatings,
          userId,
          updatedAt: serverTimestamp(),
          createdAt: serverTimestamp()
        },
        { merge: true }
      );
    },
    [userId]
  );

  const average = Object.values(ratings).length
    ? Math.round((Object.values(ratings).reduce((sum, value) => sum + value, 0) / Object.values(ratings).length) * 20)
    : 0;

  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Behance + LinkedIn Portfolio"
        description="Тут ти фіксуєш структуру кейсу, оцінюєш навички і поступово збираєш матеріал для Junior Graphic Designer / Medienfachfrau."
        action={<Badge tone="green">{average}% skill confidence</Badge>}
      />

      <div className="grid gap-6 xl:grid-cols-[1fr_420px]">
        <Panel title="Behance Case Study" description="Це структура, за якою дизайнерські роботи виглядають професійно.">
          <div className="grid gap-3 md:grid-cols-2">
            {caseSteps.map((step) => (
              <div key={step} className="rounded-md border border-line p-4 dark:border-neutral-800">
                <p className="font-semibold">{step}</p>
                <AutosaveTextarea
                  label="Notiz"
                  initialValue=""
                  rows={3}
                  placeholder={`Що показати в блоці ${step}?`}
                  onSave={(value) =>
                    setDoc(
                      doc(getFirebaseDb(), "users", userId, "portfolio", step.toLowerCase().replace(/\s+/g, "-")),
                      {
                        id: step,
                        title: step,
                        content: value,
                        userId,
                        updatedAt: serverTimestamp(),
                        createdAt: serverTimestamp()
                      },
                      { merge: true }
                    )
                  }
                />
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Self-Assessment" description="Оцінюй чесно від 1 до 5, щоб бачити розвиток.">
          <div className="space-y-4">
            {skills.map((skill) => {
              const value = ratings[skill] ?? 1;
              return (
                <div key={skill}>
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <span className="text-sm font-medium">{skill}</span>
                    <Badge>{value}/5</Badge>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={5}
                    value={value}
                    onChange={(event) => void saveRatings({ ...ratings, [skill]: Number(event.target.value) })}
                    className="w-full accent-brand-600"
                  />
                </div>
              );
            })}
            <ProgressBar value={average} />
          </div>
        </Panel>
      </div>
    </>
  );
}
