const fs = require('fs');
const fastcsv = require('fast-csv');
const { faker } = require('@faker-js/faker');

// 出力先のCSVファイル
const outputFilePath = 'output.csv';

// データ生成用の設定
const numRecords = 4000;
const hl_no = '01517';

// kn_torikomi_no と kn_no の重複を防ぐためのセット
const kn_torikomi_noSet = new Set();
const kn_noSet = new Set();

const generateUniqueNumber = (length, set) => {
    let number;
    do {
        number = faker.number.int({ min: Math.pow(10, length - 1), max: Math.pow(10, length) - 1 }).toString().padStart(length, '0');
    } while (set.has(number));
    set.add(number);
    return number;
};

// データ生成
const data = [];
for (let i = 0; i < numRecords; i++) {
    data.push({
        hl_no: hl_no,
        kn_torikomi_no: generateUniqueNumber(8, kn_torikomi_noSet),
        kn_no: generateUniqueNumber(5, kn_noSet),
        kn_nm: faker.person.fullName(),
        k_kn_nm: faker.person.lastName(),
        yubin_no: faker.address.zipCode(),
        ad: faker.address.streetAddress(),
        tel: faker.phone.number(),
        sei: faker.number.int({ min: 1, max: 10 }),
        birth_dt: faker.date.birthdate().toISOString().split('T')[0],
        ansho_no: faker.number.int({ min: 1000, max: 9999 }).toString(),
        torihiki_dt: faker.date.past().toISOString().split('T')[0],
        kouza1_syo_zan: faker.number.int({ min: 0, max: 10000 }).toString(),
        kouza1_zan: faker.number.int({ min: 0, max: 10000 }).toString(),
        kouza1_seisan_flg: "",
        kouza2_syo_zan: faker.number.int({ min: 0, max: 10000 }).toString(),
        kouza2_zan: faker.number.int({ min: 0, max: 10000 }).toString(),
        kouza2_seisan_flg: "",
        kouza3_syo_zan: faker.number.int({ min: 0, max: 10000 }).toString(),
        kouza3_zan: faker.number.int({ min: 0, max: 10000 }).toString(),
        kouza3_seisan_flg: "",
        kouza4_syo_zan: faker.number.int({ min: 0, max: 10000 }).toString(),
        kouza4_zan: faker.number.int({ min: 0, max: 10000 }).toString(),
        kouza4_seisan_flg: "",
        kouza5_syo_zan: faker.number.int({ min: 0, max: 10000 }).toString(),
        kouza5_zan: faker.number.int({ min: 0, max: 10000 }).toString(),
        kouza5_seisan_flg: "",
        kouza6_syo_zan: faker.number.int({ min: 0, max: 10000 }).toString(),
        kouza6_zan: faker.number.int({ min: 0, max: 10000 }).toString(),
        kouza6_seisan_flg: "",
        kouza7_syo_zan: faker.number.int({ min: 0, max: 10000 }).toString(),
        kouza7_zan: faker.number.int({ min: 0, max: 10000 }).toString(),
        kouza7_seisan_flg: "",
        kouza8_syo_zan: faker.number.int({ min: 0, max: 10000 }).toString(),
        kouza8_zan: faker.number.int({ min: 0, max: 10000 }).toString(),
        kouza8_seisan_flg: "",
        kouza9_syo_zan: faker.number.int({ min: 0, max: 10000 }).toString(),
        kouza9_zan: faker.number.int({ min: 0, max: 10000 }).toString(),
        kouza9_seisan_flg: "",
        kouza10_syo_zan: faker.number.int({ min: 0, max: 10000 }).toString(),
        kouza10_zan: faker.number.int({ min: 0, max: 10000 }).toString(),
        kouza10_seisan_flg: "",
        kouza11_syo_zan: faker.number.int({ min: 0, max: 10000 }).toString(),
        kouza11_zan: faker.number.int({ min: 0, max: 10000 }).toString(),
        kouza11_seisan_flg: "",
        kouza12_syo_zan: faker.number.int({ min: 0, max: 10000 }).toString(),
        kouza12_zan: faker.number.int({ min: 0, max: 10000 }).toString(),
        kouza12_seisan_flg: "",
        kouza13_syo_zan: faker.number.int({ min: 0, max: 10000 }).toString(),
        kouza13_zan: faker.number.int({ min: 0, max: 10000 }).toString(),
        kouza13_seisan_flg: "",
        kouza14_syo_zan: faker.number.int({ min: 0, max: 10000 }).toString(),
        kouza14_zan: faker.number.int({ min: 0, max: 10000 }).toString(),
        kouza14_seisan_flg: "",
        kouza15_syo_zan: faker.number.int({ min: 0, max: 10000 }).toString(),
        kouza15_zan: faker.number.int({ min: 0, max: 10000 }).toString(),
        kouza15_seisan_flg: "",
        kouza16_syo_zan: faker.number.int({ min: 0, max: 10000 }).toString(),
        kouza16_zan: faker.number.int({ min: 0, max: 10000 }).toString(),
        kouza16_seisan_flg: "",
        kouza17_syo_zan: faker.number.int({ min: 0, max: 10000 }).toString(),
        kouza17_zan: faker.number.int({ min: 0, max: 10000 }).toString(),
        kouza17_seisan_flg: "",
        kouza18_syo_zan: faker.number.int({ min: 0, max: 10000 }).toString(),
        kouza18_zan: faker.number.int({ min: 0, max: 10000 }).toString(),
        kouza18_seisan_flg: "",
        kouza19_syo_zan: faker.number.int({ min: 0, max: 10000 }).toString(),
        kouza19_zan: faker.number.int({ min: 0, max: 10000 }).toString(),
        kouza19_seisan_flg: "",
        kouza20_syo_zan: faker.number.int({ min: 0, max: 10000 }).toString(),
        kouza20_zan: faker.number.int({ min: 0, max: 10000 }).toString(),
        kouza20_seisan_flg: "",
        jitai_flg: "",
        jitai_at: "",
        up_dt: faker.date.recent().toISOString().split('T')[0],
        nichu_tel: "",
        jk_jo_kbn: "00",
        f: "0",
        web_kn_no: "",
        operation_f: "1",
        is_failed: false,
    });
}

// CSV出力
const ws = fs.createWriteStream(outputFilePath);
fastcsv
    .write(data, { headers: true, quoteColumns: true })
    .pipe(ws);

console.log(`CSV file generated at ${outputFilePath}`);
