import { AppDataSource } from '../config/database';
import { PostType } from '../entities/PostType';
import { LawsRegsType } from '../entities/LawsRegsType';
import { PerfResultsType } from '../entities/PerfResultsType';
import { ProcurementPlanType } from '../entities/ProcurementPlanType';

export async function createSamplePostTypes() {
  try {
    const postTypeRepository = AppDataSource.getRepository(PostType);
    
    const samplePostTypes = [
      { type_name: 'ข่าวประชาสัมพันธ์' },
      { type_name: 'ข่าวกิจกรรม' },
      { type_name: 'ประกาศ' },
      { type_name: 'ข่าวสาร' }
    ];

    for (const typeData of samplePostTypes) {
      const existing = await postTypeRepository.findOne({
        where: { type_name: typeData.type_name }
      });

      if (!existing) {
        const postType = postTypeRepository.create(typeData);
        await postTypeRepository.save(postType);
        console.log(`✅ Created Post Type: ${typeData.type_name}`);
      }
    }
  } catch (error) {
    console.error('❌ Error creating sample post types:', error);
  }
}

export async function createSampleLawsRegsTypes() {
  try {
    const lawsRegsTypeRepository = AppDataSource.getRepository(LawsRegsType);
    
    const sampleLawsRegsTypes = [
      { type_name: 'กฎหมายแรงงาน' },
      { type_name: 'กฎหมายสิ่งแวดล้อม' },
      { type_name: 'ระเบียบราชการ' },
      { type_name: 'ข้อบังคับ' }
    ];

    for (const typeData of sampleLawsRegsTypes) {
      const existing = await lawsRegsTypeRepository.findOne({
        where: { type_name: typeData.type_name }
      });

      if (!existing) {
        const lawsRegsType = lawsRegsTypeRepository.create(typeData);
        await lawsRegsTypeRepository.save(lawsRegsType);
        console.log(`✅ Created Laws/Regs Type: ${typeData.type_name}`);
      }
    }
  } catch (error) {
    console.error('❌ Error creating sample laws/regs types:', error);
  }
}

export async function createSamplePerfResultsTypes() {
  try {
    const perfResultsTypeRepository = AppDataSource.getRepository(PerfResultsType);
    
    const samplePerfResultsTypes = [
      { type_name: 'ผลการดำเนินงานประจำปี' },
      { type_name: 'ผลการดำเนินงานรายไตรมาส' },
      { type_name: 'รายงานการประเมิน' },
      { type_name: 'ผลการตรวจสอบ' }
    ];

    for (const typeData of samplePerfResultsTypes) {
      const existing = await perfResultsTypeRepository.findOne({
        where: { type_name: typeData.type_name }
      });

      if (!existing) {
        const perfResultsType = perfResultsTypeRepository.create(typeData);
        await perfResultsTypeRepository.save(perfResultsType);
        console.log(`✅ Created Performance Results Type: ${typeData.type_name}`);
      }
    }
  } catch (error) {
    console.error('❌ Error creating sample performance results types:', error);
  }
}

export async function createSampleProcurementPlanTypes() {
  try {
    const procurementPlanTypeRepository = AppDataSource.getRepository(ProcurementPlanType);
    
    const sampleProcurementPlanTypes = [
      { type_name: 'แผนการจัดซื้อจัดจ้างประจำปี' },
      { type_name: 'แผนการจัดซื้อครุภัณฑ์' },
      { type_name: 'แผนการจัดจ้างบริการ' },
      { type_name: 'แผนการจัดซื้อวัสดุ' }
    ];

    for (const typeData of sampleProcurementPlanTypes) {
      const existing = await procurementPlanTypeRepository.findOne({
        where: { type_name: typeData.type_name }
      });

      if (!existing) {
        const procurementPlanType = procurementPlanTypeRepository.create(typeData);
        await procurementPlanTypeRepository.save(procurementPlanType);
        console.log(`✅ Created Procurement Plan Type: ${typeData.type_name}`);
      }
    }
  } catch (error) {
    console.error('❌ Error creating sample procurement plan types:', error);
  }
}

export async function createAllSampleData() {
  console.log('🌱 Creating sample data for all entities...');
  
  await createSamplePostTypes();
  await createSampleLawsRegsTypes();
  await createSamplePerfResultsTypes();
  await createSampleProcurementPlanTypes();
  
  console.log('✅ All sample data created successfully');
}