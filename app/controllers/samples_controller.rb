class SamplesController < ApplicationController
  before_action :set_sample, only: %i[ show edit edit_confirm update destroy ]

  def index
    @header = Header.first || Header.new
    @header.details.build if @header.details.blank?
  end

  def create
    if header_params[:id].present?
      @header = Header.find(header_params[:id])
      @header.assign_attributes(header_params)
    else
      @header = Header.new(header_params)
    end

    if @header.valid?
      @header.save!
      render :index, status: :see_other
      #      render turbo_stream: turbo_stream.replace("sample_list", partial: 'sample_list'), status: :see_other
    else
      render :index, status: :unprocessable_entity
    end
  end

  private
    # Only allow a list of trusted parameters through.
    def header_params
      params.require(:header).permit!
    end
end
