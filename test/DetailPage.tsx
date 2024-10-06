import { Star, Wifi, Coffee, Utensils, User, ArrowLeft, Dog, Heart, Shield } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import Image from 'next/image'

export default function DetailPage() {
  return (
    <div className="min-h-screen bg-sky-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <Button variant="ghost" size="sm" className="mr-2">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-2xl font-bold text-sky-700">ペットホテル詳細</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
          <div>
            <div className="bg-white rounded-lg shadow p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-sky-700">わんわんパラダイス</h2>
              <div className="flex items-center mb-4">
                <Star className="text-yellow-400 mr-1" />
                <Star className="text-yellow-400 mr-1" />
                <Star className="text-yellow-400 mr-1" />
                <Star className="text-yellow-400 mr-1" />
                <Star className="text-yellow-400 mr-1" />
                <span className="text-sm text-gray-600 ml-2">5.0 (500件のレビュー)</span>
              </div>
              <Image
                src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="わんわんパラダイス"
                width={800}
                height={400}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-600 mb-4">
                東京の中心部に位置する最高級のペットホテル。広々とした個室と充実したケアサービスで、大切なペットに至福のひとときをお届けします。
              </p>
              <h3 className="text-lg font-semibold mb-2 text-sky-600">設備とサービス</h3>
              <ul className="grid grid-cols-2 gap-2">
                <li className="flex items-center"><Dog className="mr-2 text-sky-600" /> 個別の広々としたケージ</li>
                <li className="flex items-center"><Heart className="mr-2 text-sky-600" /> 24時間獣医師常駐</li>
                <li className="flex items-center"><Shield className="mr-2 text-sky-600" /> 安全な屋外運動場</li>
                <li className="flex items-center"><Coffee className="mr-2 text-sky-600" /> ペット用おやつサービス</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-4 text-sky-700">レビュー</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="border-b pb-4 last:border-b-0">
                    <div className="flex items-center mb-2">
                      <User className="mr-2 text-sky-600" />
                      <span className="font-semibold">ペット飼い主{i}</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <Star className="text-yellow-400 mr-1" />
                      <Star className="text-yellow-400 mr-1" />
                      <Star className="text-yellow-400 mr-1" />
                      <Star className="text-yellow-400 mr-1" />
                      <Star className="text-yellow-400 mr-1" />
                    </div>
                    <p className="text-gray-600">素晴らしい滞在でした。スタッフの対応も親切で、愛犬も快適に過ごせたようです。また利用したいと思います。</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-lg shadow p-6 sticky top-4">
              <h3 className="text-xl font-semibold mb-4 text-sky-700">予約</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-sky-600">チェックイン</label>
                  <Input type="date" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-sky-600">チェックアウト</label>
                  <Input type="date" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-sky-600">ペットの種類</label>
                  <Select>
                    <option>犬</option>
                    <option>猫</option>
                    <option>その他</option>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-sky-600">ペットのサイズ</label>
                  <Select>
                    <option>小型（～5kg）</option>
                    <option>中型（5～15kg）</option>
                    <option>大型（15kg～）</option>
                  </Select>
                </div>
                <div className="text-2xl font-semibold text-sky-700">¥5,000 / 泊 ~</div>
                <Button className="w-full bg-sky-600 hover:bg-sky-700">予約する</Button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}