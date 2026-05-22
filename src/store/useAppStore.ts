import { create } from "zustand";

interface UploadedFile {
  id: string;
  name: string;
  size: string;
  type: string;
}

export interface MSMERecord {
  id: string;

  studentName: string;

  aadhaar: string;

  collegeId: string;

  projectTitle: string;

  abstract: string;

  udyamId: string;

  escrowAmount: number;

  loanStatus: string;

  escrowStatus: string;

  createdAt: string;

  files: UploadedFile[];
}

interface AppState {
  studentIPs: number;

  msmesGenerated: number;

  escrowLocked: number;

  patentsReady: number;

  /*
    PIPELINE STAGES

    0 = NOT STARTED
    1 = MSME REGISTERED
    2 = LOAN DISBURSED
    3 = CAPITAL LOCKED
    4 = IPO PATENT READY
  */

  escrowStage: number;

  latestMSME: MSMERecord | null;

  msmeHistory: MSMERecord[];

  loading: boolean;

  generateMSME: (
    data: Omit<
      MSMERecord,
      | "id"
      | "udyamId"
      | "loanStatus"
      | "escrowStatus"
      | "createdAt"
    >
  ) => Promise<void>;

  resetEscrow: () => void;
}

export const useAppStore = create<AppState>(
  (set, get) => ({
    /*
      EVERYTHING STARTS FROM 0
    */

    studentIPs: 0,

    msmesGenerated: 0,

    patentsReady: 0,

    escrowLocked: 0,

    /*
      PIPELINE STATE
    */

    escrowStage: 0,

    latestMSME: null,

    msmeHistory: [],

    loading: false,

    /*
      MAIN GENERATION FLOW
    */

    generateMSME: async (data) => {
      /*
        PREVENT DOUBLE CLICK
      */

      if (get().loading) return;

      /*
        RESET PIPELINE
      */

      set({
        loading: true,
        escrowStage: 0,
      });

      /*
        CREATE MSME RECORD
      */

      const newRecord: MSMERecord = {
        id: `MSME-${Date.now()}`,

        studentName: data.studentName,

        aadhaar: data.aadhaar,

        collegeId: data.collegeId,

        projectTitle: data.projectTitle,

        abstract: data.abstract,

        files: data.files || [],

        /*
          FIXED DEMO ESCROW VALUE
        */

        escrowAmount: 100000,

        /*
          RANDOM UDYAM ID
        */

        udyamId: `UDYAM-MH-${Math.floor(
          100000 + Math.random() * 900000
        )}`,

        loanStatus: "Pending",

        escrowStatus: "Initiated",

        createdAt: new Date().toISOString(),
      };

      /*
        ====================================
        STEP 1
        MSME REGISTERED
        ====================================
      */

      set((state) => ({
        latestMSME: newRecord,

        msmeHistory: [
          newRecord,
          ...state.msmeHistory,
        ],

        /*
          REALTIME COUNTS
        */

        studentIPs: state.studentIPs + 1,

        msmesGenerated:
          state.msmesGenerated + 1,

        escrowStage: 1,
      }));

      /*
        ====================================
        STEP 2
        LOAN DISBURSED
        ====================================
      */

      setTimeout(() => {
        set((state) => ({
          escrowStage: 2,

          latestMSME: state.latestMSME
            ? {
                ...state.latestMSME,

                loanStatus: "Disbursed",
              }
            : null,
        }));
      }, 2000);

      /*
        ====================================
        STEP 3
        CAPITAL LOCKED
        ====================================
      */

      setTimeout(() => {
        set((state) => {
          if (!state.latestMSME) {
            return {};
          }

          return {
            escrowStage: 3,

            /*
              REALTIME ESCROW TOTAL
            */

            escrowLocked:
              state.escrowLocked + 100000,

            latestMSME: {
              ...state.latestMSME,

              escrowAmount: 100000,

              escrowStatus:
                "Capital Locked",
            },
          };
        });
      }, 4000);

      /*
        ====================================
        STEP 4
        PATENT READY
        ====================================
      */

      setTimeout(() => {
        set((state) => {
          if (!state.latestMSME) {
            return {
              loading: false,
            };
          }

          return {
            escrowStage: 4,

            patentsReady:
              state.patentsReady + 1,

            loading: false,

            latestMSME: {
              ...state.latestMSME,

              loanStatus: "Approved",

              escrowStatus:
                "Patent Filing Ready",
            },
          };
        });
      }, 6000);
    },

    /*
      RESET PIPELINE
    */

    resetEscrow: () => {
      set({
        escrowStage: 0,

        loading: false,

        latestMSME: null,

        /*
          RESET TOTALS
        */

        studentIPs: 0,

        msmesGenerated: 0,

        patentsReady: 0,

        escrowLocked: 0,

        msmeHistory: [],
      });
    },
  })
);