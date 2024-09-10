import Image from "next/image";
import { remark } from "remark";
import html from "remark-html";
import { useEffect, useState } from "react";

export async function getPostData(id) {
  const text = `作为一个ISTJ（内向、感觉、思考、判断型）的人，你通常注重实际和逻辑，讲求规则和秩序。因此，你的评论“爱护公共财物人人有责，不能因为是免费提供的就随意浪费”可以从以下几点合理性来解释：
1. **遵守规则和规范：**
   - ISTJ重视规章制度和规范。你会认为维护公共财物是大家应该遵守的基本规范，随意浪费是不符合社会规则的行为。
2. **责任感和义务：**
   - ISTJ有很强的责任感和义务感。你认为每个人都有责任和义务维护公共资源，因为这些资源是为了大家的共同利益而提供的。
3. **实用和效率：**
   - ISTJ注重实用和效率。你认为公共财物的浪费是一种资源的低效利用，这不仅会增加维护成本，还会导致资源的不足，影响大家的使用。
4. **秩序和组织：**
   - ISTJ重视秩序和组织。你认为只有每个人都遵守秩序，合理使用公共资源，才能确保公共场所的整洁和有序，给所有人带来便利和舒适的环境。
5. **长远规划和稳定性：**
   - ISTJ倾向于长远规划和稳定性。你认为如果大家都能珍惜和合理使用公共财物，可以确保这些资源的长期可用，避免因浪费导致的资源短缺和管理问题。
综上所述，你的评论体现了ISTJ的典型特质：重视规则和规范、强烈的责任感和义务感、注重实用和效率、维护秩序和组织以及关注长远规划和稳定性。这些都为你的观点提供了合理性解释。`;
  // Use gray-matter to parse the post metadata section
  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(text);
  const contentHtml = processedContent.toString();
  // Combine the data with the id and contentHtml
  return contentHtml;
}
export function FloatingForm({ isOpen }: { isOpen: boolean }) {
  const [contentHtml, setContentHtml] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const html = await getPostData(1);
      setContentHtml(html);
    };

    fetchData();
  }, []);
  const question = "Question";
  const data = [
    {
      id: 1,
      title: "Yes",
      checked: false,
    },
    {
      id: 2,
      title: "No",
      checked: false,
    },
  ];

  return (
    <div className="absolute right-1/4 bottom-1/8 w-1/2 h-3/4 z-10">
      {isOpen && (
        <div className="mt-4 p-6 bg-white rounded-lg shadow-lg w-full h-full">
          <div className="flex h-full flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex flex-col justify-between bg-gray-500 md:overflow-hidden">
              <h2 className="whitespace-pre-line text-sm md:overflow-y-auto w-[calc(100%+14px)]">
                {contentHtml}
              </h2>
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert "
                src="/test.png"
                alt="Next.js Logo"
                width={360}
                height={480}
                priority
              />
            </div>
            <div>
              <div className="p-4 h-1/2 bg-stone-500">
                <div>
                  <h2 className="text-2xl font-bold mb-4">{question}</h2>
                  <form>
                    <div className="flex-col">
                      {data.map((item) => (
                        <div key={item.id}>
                          <button
                            type="button"
                            id="option1"
                            name="vote"
                            value="option1"
                            className="mr-2 mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold md:w-72 rounded text-left px-2"
                          >
                            {item.title}
                          </button>
                        </div>
                      ))}
                    </div>
                  </form>
                </div>
              </div>
              <div className="p-4 h-1/2 bg-gray-500">
                <div className="md:overflow-hidden ">
                  <div className="whitespace-pre-line text-sm mb-4 overflow-y-auto max-h-72 w-[calc(100%+14px)]">
                    <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
