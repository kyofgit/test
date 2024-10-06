import { Search, Dog, ArrowLeft, Star, User } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-sky-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Button variant="ghost" size="sm" className="mr-2">
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <h1 className="text-2xl font-bold text-sky-700">ペットホテル予約</h1>
          </div>
          <Button variant="outline" size="sm">
            <User className="mr-2 h-4 w-4" /> ログイン / 登録
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4 text-sky-800">ペットホテル検索</h2>
          <div className="space-y-4">
            <Input placeholder="目的地（日本国内）" />
            <div className="grid grid-cols-2 gap-4">
              <Input type="date" placeholder="チェックイン" />
              <Input type="date" placeholder="チェックアウト" />
            </div>
            <Select>
              <option>ペットの種類を選択</option>
              <option>犬</option>
              <option>猫</option>
              <option>その他</option>
            </Select>
            <Select>
              <option>ペットのサイズを選択</option>
              <option>小型（～5kg）</option>
              <option>中型（5～15kg）</option>
              <option>大型（15kg～）</option>
            </Select>
            <Button className="w-full bg-sky-600 hover:bg-sky-700">
              <Search className="mr-2 h-4 w-4" /> 検索
            </Button>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-sky-800">おすすめペットホテル</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
              }
            ].map((hotel, i) => (
              <div key={i} className="bg-white rounded-lg shadow overflow-hidden">
                <Image src={hotel.image} alt={hotel.name} width={400} height={200} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-sky-700">{hotel.name}</h3>
                  <p className="text-sm text-gray-600">快適な空間でペットをおもてなし</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-sky-800">人気ランキング</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow p-4">
                <div className="flex items-center mb-2">
                  <Star className="text-yellow-400 mr-1" />
                  <span className="font-semibold text-sky-700">ランキング {i}位</span>
                </div>
                <h3 className="font-semibold text-sky-600">人気のペットホテル {i}</h3>
                <p className="text-sm text-gray-600">ペットに優しい環境が自慢です</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}