import { Filter, Map, Star, ArrowLeft, Dog } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import Image from 'next/image'

export default function SearchResultsPage() {
  return (
    <div className="min-h-screen bg-sky-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <Button variant="ghost" size="sm" className="mr-2">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-2xl font-bold text-sky-700">検索結果</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
          <aside className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold mb-4 text-sky-800">絞り込み</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-sky-700">日付</label>
                <Input type="date" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-sky-700">地域</label>
                <Select>
                  <option>全ての地域</option>
                  <option>東京</option>
                  <option>大阪</option>
                  <option>京都</option>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-sky-700">ペットの種類</label>
                <Select>
                  <option>全て</option>
                  <option>犬</option>
                  <option>猫</option>
                  <option>その他</option>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-sky-700">ペットのサイズ</label>
                <Select>
                  <option>全て</option>
                  <option>小型（～5kg）</option>
                  <option>中型（5～15kg）</option>
                  <option>大型（15kg～）</option>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-sky-700">価格帯</label>
                <Select>
                  <option>指定なし</option>
                  <option>~5,000円</option>
                  <option>5,000円~10,000円</option>
                  <option>10,000円~</option>
                </Select>
              </div>
              <Button className="w-full bg-sky-600 hover:bg-sky-700">
                <Filter className="mr-2 h-4 w-4" /> 絞り込む
              </Button>
            </div>
          </aside>

          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-sky-800">検索結果: 20件</h2>
              <Button variant="outline">
                <Map className="mr-2 h-4 w-4" /> 地図で見る
              </Button>
            </div>
            <div className="space-y-4">
              {[
                {
                  name: "わんわんパラダイス",
                  image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                },
                {
                  name: "ねこねこハウス",
                  image: "https://images.unsplash.com/photo-1570018144715-43110363d70a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                },
                {
                  name: "ペットリゾート湘南",
                  image: "https://images.unsplash.com/photo-1596473537047-aee1d7ce37eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                },
                {
                  name: "ハッピーテイル",
                  image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"
                },
                {
                  name: "ペットパレス",
                  image: "https://images.unsplash.com/photo-1603077749848-c45717e1e7a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                }
              ].map((hotel, i) => (
                <div key={i} className="bg-white rounded-lg shadow p-4 flex">
                  <Image src={hotel.image} alt={hotel.name} width={200} height={150} className="w-1/3 rounded-lg mr-4 object-cover" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-sky-700">{hotel.name}</h3>
                    <div className="flex items-center mb-2">
                      <Star className="text-yellow-400 mr-1" />
                      <Star className="text-yellow-400 mr-1" />
                      <Star className="text-yellow-400 mr-1" />
                      <Star className="text-yellow-400 mr-1" />
                      <span className="text-sm text-gray-600 ml-1">4.5 (200件のレビュー)</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">東京都中央区</p>
                    <div className="flex items-center">
                      <Dog className="text-sky-600 mr-2 h-4 w-4" />
                      <span className="text-sm text-gray-600">犬、猫、小動物対応</span>
                    </div>
                    <div className="text-lg font-semibold text-sky-600 mt-2">¥5,000 / 泊 ~</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}